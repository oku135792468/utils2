<template>
    <div style="width: 100%;height: 100%;">
        <el-table
                ref="multipleTable"
                :data="tableData"
                style="width: 100%;margin-bottom: 20px;"
                row-key="id"
                border
                default-expand-all
                @select="handleSelection"
                @select-all="handleSelectionAll"
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="日期"
                    sortable
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    sortable
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
            <el-button @click="toggleSelection([tableData[1]])">切换第二、第三行的选中状态</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SelectTable",
        data() {
            return {
                multipleSelectionStatus: false,
                multipleSelection: [],
                tableData: [{
                    id: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    id: 3,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    children: [{
                        id: 31,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        id: 32,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }]
                }]
            }
        },
        methods: {
            toggleSelection() {

            },
            handleSelection() {

            },
            handleSelectionAll(val) {
                let value = {...val};
                let flag = false;

                for (let item in value) {
                    if (value[item].children?.length > 0) {
                        flag = true;
                        break;
                    }
                }
                this.tableData.map((item) => {
                    this.changeChildren(item, flag)
                })
            },
            changeChildren(item, type) {
                if (item.children?.length > 0) {
                    item.children.map((children) => {
                        this.$refs.multipleTable.toggleRowSelection(children, type);
                    })
                }
            }
        }
    }
</script>

<style scoped>
</style>
