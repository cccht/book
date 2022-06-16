<template>
  <el-row :gutter="10" justify="center" style="margin-top: 100px">
    <el-col :span="12">
      <el-image style="width: 200px; " src="https://img2.doubanio.com/view/subject/l/public/s1106951.jpg" fit="contain" />
    </el-col>
    <el-col :span="12">
      <el-space direction="vertical" class="book-info">
        <el-descriptions
            title="毛泽东选集"
            direction="vertical"
            :column="4"
            :size="size"
            border
        >
          <el-descriptions-item label="作者">[清] 曹雪芹 著 / 高鹗 续</el-descriptions-item>
          <el-descriptions-item label="出版社">人民文学出版社</el-descriptions-item>
          <el-descriptions-item label="出版年" :span="2">1996-12</el-descriptions-item>
          <el-descriptions-item label="丛书">中国古典文学读本丛书</el-descriptions-item>
          <el-descriptions-item label="ISBN"
          >9787020002207
          </el-descriptions-item>
        </el-descriptions>
        <el-card shadow="never">
          <el-space>
            <el-link>资源</el-link>
            <el-button
                type="primary"
                link
            >借阅</el-button>
            <el-button
                type="primary"
                link
            >购买</el-button>
            <el-button
                type="primary"
                link
            >下载</el-button>
          </el-space>
        </el-card>
      </el-space>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "book_info"
}
</script>

<style scoped>

</style>