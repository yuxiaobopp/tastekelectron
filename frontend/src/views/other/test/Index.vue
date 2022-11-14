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
        <a-form-model-item label="" prop="portopened">
          <a-switch v-model="portopened" />
        </a-form-model-item>
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
import { tastekIpcApiRoute, tastekSpecialIpcRoute } from '@/api/special'
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
      portopened: this.serialPorter.portopened,
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
  computed: {},
  mounted() {
    // 1、获取
    this.init();
    this.sendNotification(1);

    /*
    this.init();
    //开启串口
    this.$ipc.on(tastekSpecialIpcRoute.open_serial_success, (event, result) => {
      // self.$message.success('串口已打开');
      console.log(result);
    });
    //关闭串口
    this.$ipc.on(tastekSpecialIpcRoute.close_serial_success, (event, result) => {
      // self.$message.success('串口已关闭');
      console.log(result);
    });

    //串口操作异常
    this.$ipc.on(tastekIpcApiRoute.serial_open_error, (event, result) => {
      // self.$message.error('操作失败，请检查串口是否被占用');
      console.log(result);
    });

    this.sendNotification(1);
    */
  },

  methods: {
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    init() {
      console.log(this.serialPorter.portopened);
      // 避免重复监听，或者将 on 功能写到一个统一的地方，只加载一次
      this.$ipc.removeAllListeners(tastekIpcApiRoute.initSerialPort);
      this.$ipc.on(tastekIpcApiRoute.initSerialPort, (event, result) => {
        if (result == true) {
          console.log('串口加载中');
        } else {
          var templist = [];
          if (Object.prototype.toString.call(result) == '[object Array]') {
            result.forEach(function (item) {
              templist.push(item.path);
            });
            this.comportlist = templist;
          }
          console.log('串口加载完毕');
        }
      });

      this.$ipc.removeAllListeners(tastekSpecialIpcRoute.open_serial_success);
      this.$ipc.removeAllListeners(tastekSpecialIpcRoute.close_serial_success);
      this.$ipc.removeAllListeners(tastekSpecialIpcRoute.serial_open_error);
      this.$ipc.removeAllListeners(tastekSpecialIpcRoute.serial_close_error);
      //开启串口
      const self = this;
      this.$ipc.on(tastekSpecialIpcRoute.open_serial_success, (event, result) => {
        // self.$message.success('串口已打开');
        console.log(result);
        this.portopened = true;
        this.serialPorter.portopened = true;
        this.serialPorter.portinfo=result;
      });
      //关闭串口
      this.$ipc.on(tastekSpecialIpcRoute.close_serial_success, (event, result) => {
        // self.$message.success('串口已关闭');
        console.log(result);
        this.portopened = false;
        this.serialPorter.portopened = false;
      });

      //串口操作异常
      this.$ipc.on(tastekIpcApiRoute.serial_open_error, (event, result) => {
        // self.$message.error('操作失败，请检查串口是否被占用');
        console.log(result);
      });

      this.$ipc.on(tastekIpcApiRoute.serial_close_error, (event, result) => {
        // self.$message.error('操作失败，请检查串口是否被占用');
        console.log(result);
      });

    },
    //默认与主进程通信方法
    sendNotification(index) {
      this.$ipc.send(tastekIpcApiRoute.initSerialPort, index);
    },
    onOpenPort() {
      const self = this;
      if (self.portopened == true) {
        self.$message.error('串口已打开，请先关闭串口');
        return;
      }
      self.$refs.ruleForm.validate(valid => {
        if (valid) {
          self.$ipc.send(tastekSpecialIpcRoute.open_serial, self.form);
        } else {
          return false;
        }
      });
    },
    onClosePort() {
      this.$ipc.send(tastekSpecialIpcRoute.close_serial, this.form);
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
