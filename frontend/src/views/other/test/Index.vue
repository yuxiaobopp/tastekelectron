<template>
  <div id="app-other">
    <div class="one-block-1">
      <span>
        打开串口
      </span>
    </div>
    <a-form-model ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item ref="comport" label="选择串口" prop="comport">
        <a-select id="uart_comnum" v-model="form.comport" placeholder="请选择串口" show-search>
          <a-select-option v-for="comport in comportlist" :key="comport" :value="comport">
            {{ comport }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="选择波特率">
        <a-select v-model="form.combaud" placeholder="请选择波特率" show-search>
          <a-select-option v-for="combaud in combaudlist" :key="combaud" :value="combaud">
            {{ combaud }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="选择数据位">
        <a-radio-group v-model="form.comdata">
          <a-radio value="7">
            7
          </a-radio>
          <a-radio value="8">
            8
          </a-radio>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item label="选择校验位">
        <a-radio-group v-model="form.comparity">
          <a-radio value="none">
            None
          </a-radio>
          <a-radio value="odd">
            Odd
          </a-radio>
          <a-radio value="even">
            Even
          </a-radio>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item label="选择停止位">
        <a-radio-group v-model="form.comstop">
          <a-radio value="1">
            1
          </a-radio>
          <a-radio value="2">
            2
          </a-radio>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onOpenPort">
          打开
        </a-button>
        <a-button style="margin-left: 10px;" @click="onClosePort">
          关闭
        </a-button>
        <a-button style="margin-left: 10px;" @click="onGetAllPort">
          刷新
        </a-button>
        <a-button style="margin-left: 10px;" @click="resetForm">
          重置
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import Vue from 'vue';
import { ipcApiRoute, specialIpcRoute } from '@/api/main'
export default {
  data() {
    return {
      rules: {
        comport: [
          { required: true, message: '请选择串口', trigger: 'blur' },
        ],
      },
      /*
      ports [
      {
        path: 'COM1',
        manufacturer: '(锟斤拷准锟剿匡拷锟斤拷锟斤拷)',
        serialNumber: undefined,
        pnpId: 'ACPI\\PNP0501\\0',
        locationId: undefined,
        friendlyName: '通锟脚端匡拷 (COM1)',
        vendorId: undefined,
        productId: undefined
      }
    ]
      */
      comportlist: ['COM0'],
      combaudlist: [
        '921600',
        '460800',
        '230400',
        '115200',
        '57600',
        '38400',
        '19200',
        '14400',
        '9600',
        '4800',
        '2400',
        '1200'],
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        comport: '',//com
        combaud: '9600',//波特率
        comdata: '8',//数据位
        comparity: 'none',//校验位
        comstop: '1',//停止位
      },
    };
  },
  computed: {

  },
  mounted() {

    //this.initSerialPort();
    this.init();
    this.sendNotification('获取串口列表');
    //开启串口
    console.log('++++++');
    this.$ipc.on('open_serial_success', (event, result) => {
      console.log(result);
    });
    //关闭串口
    this.$ipc.on('close_serial_success', (event, result) => {
      console.log(result);
    });

    //串口操作异常
    this.$ipc.on('serial_open_error', (event, result) => {
      self.$message.erro(result);
    });
  },

  methods: {
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    init() {
      // 避免重复监听，或者将 on 功能写到一个统一的地方，只加载一次
      this.$ipc.removeAllListeners(ipcApiRoute.initSerialPort);
      this.$ipc.on(ipcApiRoute.initSerialPort, (event, result) => {
        console.log(result);
        var templist = [];
        if (Object.prototype.toString.call(result) == '[object Array]') {
          result.forEach(function (item) {
            console.log(item.path);
            templist.push(item.path);
          });
          this.comportlist = templist;
        }
      });
    },
    //默认与主进程通信方法
    sendNotification(index) {
      this.$ipc.send(ipcApiRoute.initSerialPort, index);
    },
    initSerialPort() {
      const self = this;
      //通知主进程 开启串口操作的监听进程
      this.$ipcInvoke(ipcApiRoute.initSerialPort, this.form).then(res => {
        console.log('res:', res);
        //TODO:提示串口准备就绪
      });

      // 避免重复监听，或者将 on 功能写到一个统一的地方，只加载一次
      this.$ipc.removeAllListeners(ipcApiRoute.sendNotification);
      //监听主进程通知
      this.$ipc.on(specialIpcRoute.serial_list_success, (event, result) => {
        console.log('1');
      });

      this.$ipc.on(ipcApiRoute.sendNotification, (event, result) => {
        if (Object.prototype.toString.call(result) == '[object Object]') {
          self.$message.info(result.msg);
        }
      });
    },
    onOpenPort() {
      const self = this;
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$ipc.send('open_serial', this.form);
        } else {
          //self.$message.error('请选择串口');
          return false;
        }
      });

    },
    onClosePort() {
      this.$ipc.send('open_serial', this.form);
    },
    onGetAllPort() {
      this.sendNotification(1);
    },
  }
};
</script>
<style lang="less" scoped>
#app-other {
  padding: 0px 10px;
  text-align: left;
  width: 100%;

  .one-block-1 {
    font-size: 16px;
    padding-top: 10px;
  }

  .one-block-2 {
    padding-top: 10px;
  }
}
</style>
