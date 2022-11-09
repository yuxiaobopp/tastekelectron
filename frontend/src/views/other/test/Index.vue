<template>
  <div id="app-other">
    <div class="one-block-1">
      <span>
        打开串口
      </span>
    </div>
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="选择串口">
        <a-select v-model="form.comport" placeholder="请选择串口" show-search>
          <a-select-option v-for="comport in comportlist" :key="comport" :value="comport">
            {{ combaud }}
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
          <a-radio value="None">
            None
          </a-radio>
          <a-radio value="Odd">
            Odd
          </a-radio>
          <a-radio value="Even">
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
        <a-button type="primary" @click="onSubmit">
          打开
        </a-button>
        <a-button style="margin-left: 10px;">
          刷新
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>

export default {
  data() {
    return {
      comportlist: [],
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
        comport: 'COM1',//com
        combaud: '9600',//波特率
        comdata: '7',//数据位
        comparity: 'None',//校验位
        comstop: '1',//停止位
      },
    };
  },
  computed: {

  },
  methods: {
    onSubmit() {
      console.log('submit!', this.form);
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
