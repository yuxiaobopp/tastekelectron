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
          <a-input v-model="eq" :value="eq" />
        </a-col>
        <a-col :span="16">
          <a-input v-model="at_param" :value="at_param" addon-before="AT参数" />
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
        删除AT指令
      </span>
    </div>
    <div class="one-block-2">
      <a-row>
        <a-col :span="16">
          <a-input v-model="at_del_key" :value="at_del_key" addon-before="指令" />
        </a-col>

        <a-col :span="6">
          <a-button @click="atsqlitedbOperation('atdel')">
            删除
          </a-button>
        </a-col>
      </a-row>
    </div>

    <div class="one-block-1">
      <span>
        修改AT指令
      </span>
    </div>
    <div class="one-block-2">

      <a-row :gutter="[16, 16]">
        <a-col :span="32">
          <a-input v-model="at_old" :value="at_old" addon-before="原AT指令" />
        </a-col>
        <a-col :span="8">
          <a-input v-model="at_key_new" :value="at_key_new" addon-before="新AT前缀" />
        </a-col>
        <a-col :span="8">
          <a-input v-model="eq_new" :value="eq_new" addon-before="新AT连接符号" />
        </a-col>
        <a-col :span="8">
          <a-input v-model="at_param_new" :value="at_param_new" addon-before="新AT参数" />
        </a-col>
        <a-col :span="6">
          <a-button @click="atsqlitedbOperation('atupdate')">
            确认修改
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
          <a-input v-model="at_search_key" :value="at_search_key" addon-before="关键字" />
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

    <div class="one-block-1">
      <span>
        批量导入AT指令
      </span>
    </div>
    <div class="one-block-2">
      <a-row>
        <a-col :span="12">
          <a-input v-model="dir_path" :value="dir_path" addon-before="选择导入文件" />
        </a-col>

        <a-col :span="12">
          <a-button @click="selectDir">
            选择文件
          </a-button>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-button @click="importAT">
            导入
          </a-button>
        </a-col>
      </a-row>
    </div>

    <div>
      <a-button @click="test">开发者工具</a-button>
    </div>
  </div>

</template>
<script>
import { ipcApiRoute } from '@/api/main'
export default {
  data() {
    return {
      atList: ['空'],//返回结果集
      at_key: null,//指令前缀
      at_param: null,//参数不
      eq: '=',//连接符号 =,?,=?三种
      at_search_key: '',//查询指令
      dir_path: ``,//导入excel文件
      at_del_key: '',//删除

      at_old: '',//更新
      at_key_new: '',
      eq_new: '',//新的指令连接
      at_param_new: '',//新的指令参数
    };
  },
  mounted() {
    this.getAllTestData();
  },
  methods: {
    handleaATSendSync() {
    },
    test() {
      console.log("++");
      const msg = this.$ipcSendSync(ipcApiRoute.ipcATSendSyncMsg, 'AT');
      console.log(msg);
    },
    getAllTestData() {
      const self = this;
      const params = {
        action: 'atgetall',
        searchkey: this.at_key,
      }
      this.$ipcInvoke(ipcApiRoute.atsqlitedbOperation, params).then(res => {
        console.log('res:', res);
        if (res.atList.length == 0) {
          return false;
        }
        self.atList = res.atList;
      });
    },
    atsqlitedbOperation(ac) {
      const self = this;
      const params = {
        action: ac,
        info: {
          at_key: this.at_key,
          eq: this.eq,
          at_param: this.at_param
        },
        searchkey: this.at_search_key,
        at_del_key: this.at_del_key,
        updateinfo: {
          at_old: this.at_old,
          at_key_new: this.at_key_new,
          eq_new: this.eq_new,
          at_param_new: this.at_param_new,
        }
      }
      if (ac == 'atadd' && (this.at_key == null || this.at_key.length == 0)) {
        self.$message.error(`请输入要添加的指令内容`);
        return;
      }
      if (ac == 'atdel' && (this.at_del_key == null || this.at_del_key.length == 0)) {
        self.$message.error(`请输入要删除的指令`);
        return;
      }

      if (ac == 'atupdate' && (this.at_param_new == null || this.at_param_new.length == 0)) {
        self.$message.error(`请输入要修改的指令内容`);
        return;
      }
      console.log(params);
      this.$ipcInvoke(ipcApiRoute.atsqlitedbOperation, params).then(res => {
        console.log('res:', res);
        if (ac == 'atadd') {
          if (res.result) {
            self.$message.success(`添加成功`);
            return;
          }

          self.$message.error(`添加失败`);
          return;
        }
        if (ac == 'atdel') {
          if (res.result) {
            self.$message.success(`删除成功`);
            return;
          }

          self.$message.error(`删除失败`);
          return;
        }
        if (ac == 'atget') {
          if (res.result.length == 0) {
            self.$message.error(`没有数据`);
            self.atList = ['空'];
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
      }).catch(err => {
        console.log(err);
        self.$message.error(`操作失败`);
      });
    },
    selectDir() {
      const self = this;
      self.$ipcInvoke(ipcApiRoute.selectFolder, '').then(r => {
        self.dir_path = r;
        self.$message.info(r);
      });
    },
    importAT() {
      const self = this;
      const path = self.dir_path;

      self.$ipcInvoke(ipcApiRoute.importExcel, path).then(r => {
        console.log(path);
        console.log(r);
        if (r) {

          self.$message.success('成功');
          return;
        }

        self.$message.error('导入失败');
      });
    }
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
