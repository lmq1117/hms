<template>
  <el-table :data="list" height="380" border style="width: 100%">
      <el-table-column type="index" label="序号" width="60"></el-table-column>
    <el-table-column prop="caadNum" label="会员卡号"></el-table-column>
    <el-table-column prop="name" label="会员姓名"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
</template>

<script>
import memberApi from "@/api/member";

export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // memberApi.getList().then(response=>{
      //     this.list = response.data.data
      // })
      this.list = [
          {},
          ];
    }
  }
};
</script>