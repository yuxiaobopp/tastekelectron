<template>
  <div class="app-at">
    <div class="one-block-1">
      <span>
        添加AT指令
      </span>
    </div>  
    <div class="one-block-2">
      <a-row>
        <a-col :span="6">
          <a-input v-model="at_key" :value="at_key" addon-before="AT指令头" />
        </a-col>
        <a-col :span="3">
          <a-input v-model="eq" :value="eq"/>
        </a-col>
        <a-col :span="16">
          <a-input v-model="at_param" :value="at_param" addon-before="AT参数"/>
        </a-col>
        <a-col :span="3">
        </a-col>
        <a-col :span="6">
          <a-button @click="atsqlitedbOperation('atadd')">
            添加
          </a-button>
        </a-col>
      </a-row>
    </div>

    <div class="one-block-1">
      <span>
        查询AT指令
      </span>
    </div>  
    <div class="one-block-2">
      <a-row>
        <a-col :span="16">
          <a-input v-model="at_search_key" :value="at_key" addon-before="关键字" />
        </a-col>
       
        <a-col :span="6">
          <a-button @click="atsqlitedbOperation('atget')">
            查询
          </a-button>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          {{ atList }}
        </a-col>
      </a-row>
    </div>
  </div>
 
</template>
<script>
import { ipcApiRoute } from '@/api/main'
export default {
  data() {
    return {
      atList: ['空'],
      at_key:null,
      at_param:null,
      eq:'=',
      at_search_key:''
    };
  },
  mounted () {
    this.getAllTestData();
  },
  methods: {
    test () {
    },
    getAllTestData () {
      const self = this;
      const params = {
        action: 'atgetall',
        searchkey:this.at_key,
      }
      this.$ipcInvoke(ipcApiRoute.atsqlitedbOperation, params).then(res => {
        console.log('res:', res);
        if (res.atList.length == 0) {
          return false;
        }
        self.atList = res.atList;
      }) 
    },
    atsqlitedbOperation (ac) {
      const self = this;
      const params = {
        action: ac,
        info: {
          at_key: this.at_key,
          eq:this.eq,
          at_param: this.at_param
        },
        searchkey:this.at_search_key,
        update_at: this.at_key+this.eq+this.at_param,
        delete_at: this.at_key+this.eq+this.at_param,
      }
      if (ac == 'atadd' && (this.at_key ==null||this.at_key.length == 0) ) {
        self.$message.error(`请填写数据`);
        return;
      }
      console.log(params);
      this.$ipcInvoke(ipcApiRoute.atsqlitedbOperation, params).then(res => {
        console.log('res:', res);
        if (ac == 'atadd'){
          if (res.result) {
            self.$message.success(`添加成功`);
            return;
          }

          self.$message.error(`添加失败`);
          return;
        }
        
        if (ac == 'atget') {
          if (res.result.length == 0) {
            self.$message.error(`没有数据`);
            return;
          }
          
          if (res.atList.length == 0) {
            self.atList = ['空'];
            return;
          }

          self.atList = res.result;
          return;
        }
        
        if (res.atList.length == 0) {
          self.atList = ['空'];
          return;
        }
        self.atList = res.atList;
        self.$message.success(`成功`);
      }).catch(err=>{
        console.log(err);
        self.$message.error(`操作失败`);
      }) ;
    },
  }
};
</script>
<style lang="less" scoped>
.app-at {
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
