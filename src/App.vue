<template>
  <div>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
      <el-menu-item index="0">校园图书共享平台</el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">推荐</el-menu-item>
      <el-sub-menu index="2">
        <template #title>我的</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
    <el-row :gutter="10" justify="center">
      <el-col :xs="24" :sm="16" :md="12" :lg="10" :xl="7" >
          <el-row :gutter="10" justify="center" style="margin-top: 100px">
            <el-col :span="12" style="text-align: center">
              <el-image style="width: 200px;" src="https://img2.doubanio.com/view/subject/l/public/s1106951.jpg" fit="contain" />
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
            <el-divider content-position="left">内容简介</el-divider>
            <div class="intro">
              <p>文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……</p>    <p>四光年外，“三体文明”正苦苦挣扎——三颗无规则运行的太阳主导下的百余次毁灭与重生逼迫他们逃离母星。而恰在此时。他们接收到了地球发来的信息。在运用超技术锁死地球人的基础科学之后。三体人庞大的宇宙舰队开始向地球进发……</p>    <p>人类的末日悄然来临。</p></div>
            <el-divider content-position="left">评论</el-divider>
            <el-space direction="vertical">
              <el-card shadow="none">
                <el-space alignment="flex-start">
                  <el-avatar size="default" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
                  <div style="font-size: var(--el-font-size-base);">
                    <div>
                      <span>work</span>
                      <span style="font-size: var(--el-font-size-small);color:#909399;margin-left: 10px">2022-05-22 17:30:13</span>
                    </div>
                    <div style="margin-top: 5px;color:#909399;font-size: var(--el-font-size-small);">虽然是书评影评合集，但透过此书可以一窥小岛监督的世界观，看似「中二」的想法才造就了不平凡的人生。虽然是书评影评合集，但透过此书可以一窥小岛监督的世界观，看似「中二」的想法才造就了不平凡的人生。虽然是书评影评合集，但透过此书可以一窥小岛监督的世界观，看似「中二」的想法才造就了不平凡的人生。</div>
                  </div>
                </el-space>
              </el-card>
              <el-card shadow="none">
                <el-space alignment="flex-start">
                  <el-avatar size="default" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
                  <div style="font-size: var(--el-font-size-base);">
                    <div>
                      <span>work</span>
                      <span style="font-size: var(--el-font-size-small);color:#909399;margin-left: 10px">2022-05-22 17:30:13</span>
                    </div>
                    <div style="margin-top: 5px;color:#909399;font-size: var(--el-font-size-small);">虽然是书评影评合集，但透过此书可以一窥小岛监督的世界观，看似「中二」的想法才造就了不平凡的人生。虽然是书评影评合集，但透过此书可以一窥小岛监督的世界观，看似「中二」的想法才造就了不平凡的人生。虽然是书评影评合集，但透过此书可以一窥小岛监督的世界观，看似「中二」的想法才造就了不平凡的人生。</div>
                  </div>
                </el-space>
              </el-card>
              <el-card shadow="none">
                <el-space alignment="flex-start">
                  <el-avatar size="default" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
                  <div style="font-size: var(--el-font-size-base);">
                    <div>
                      <span>work</span>
                      <span style="font-size: var(--el-font-size-small);color:#909399;margin-left: 10px">2022-05-22 17:30:13</span>
                    </div>
                    <div style="margin-top: 5px;color:#909399;font-size: var(--el-font-size-small);">虽然是书评影评合集，但透过此书可以一窥小岛监督的世界观，看似「中二」的想法才造就了不平凡的人生。虽然是书评影评合集，但透过此书可以一窥小岛监督的世界观，看似「中二」的想法才造就了不平凡的人生。虽然是书评影评合集，但透过此书可以一窥小岛监督的世界观，看似「中二」的想法才造就了不平凡的人生。</div>
                  </div>
                </el-space>
              </el-card>
            </el-space>
          </el-row>



        <el-input
            v-model="input2"
            class="m-200"
            size="large"
            placeholder="请输入图书信息"
            :suffix-icon="Search"
        />
        <el-divider content-position="left">推荐</el-divider>
        <el-space wrap>
          <div>
            <el-image style="width: 100px; " src="https://img2.doubanio.com/view/subject/l/public/s1106951.jpg" fit="contain" />
            <div style="font-size: var(--el-font-size-extra-small);">毛泽东选集</div>
          </div>
          <div>
            <el-image style="width: 100px; " src="https://img2.doubanio.com/view/subject/l/public/s1106951.jpg" fit="contain" />
            <div style="font-size: var(--el-font-size-extra-small);">毛泽东选集</div>
          </div>
          <div>
            <el-image style="width: 100px; " src="https://img2.doubanio.com/view/subject/l/public/s1106951.jpg" fit="contain" />
            <div style="font-size: var(--el-font-size-extra-small);">毛泽东选集</div>
          </div>
          <div>
            <el-image style="width: 100px; " src="https://img2.doubanio.com/view/subject/l/public/s1106951.jpg" fit="contain" />
            <div style="font-size: var(--el-font-size-extra-small);">毛泽东选集</div>
          </div>
          <div>
            <el-image style="width: 100px; " src="https://img2.doubanio.com/view/subject/l/public/s1106951.jpg" fit="contain" />
            <div style="font-size: var(--el-font-size-extra-small);">毛泽东选集</div>
          </div>
          <div>
            <el-image style="width: 100px; " src="https://img2.doubanio.com/view/subject/l/public/s1106951.jpg" fit="contain" />
            <div style="font-size: var(--el-font-size-extra-small);">毛泽东选集</div>
          </div>
        </el-space>
        <el-divider content-position="left">最新</el-divider>
        <el-space wrap>
          <div>
            <el-image style="width: 100px; " src="https://img2.doubanio.com/view/subject/l/public/s1106951.jpg" fit="contain" />
            <div style="font-size: var(--el-font-size-extra-small);">毛泽东选集</div>
          </div>
          <div>
            <el-image style="width: 100px; " src="https://img2.doubanio.com/view/subject/l/public/s1106951.jpg" fit="contain" />
            <div style="font-size: var(--el-font-size-extra-small);">毛泽东选集</div>
          </div>
          <div>
            <el-image style="width: 100px; " src="https://img2.doubanio.com/view/subject/l/public/s1106951.jpg" fit="contain" />
            <div style="font-size: var(--el-font-size-extra-small);">毛泽东选集</div>
          </div>
          <div>
            <el-image style="width: 100px; " src="https://img2.doubanio.com/view/subject/l/public/s1106951.jpg" fit="contain" />
            <div style="font-size: var(--el-font-size-extra-small);">毛泽东选集</div>
          </div>
          <div>
            <el-image style="width: 100px; " src="https://img2.doubanio.com/view/subject/l/public/s1106951.jpg" fit="contain" />
            <div style="font-size: var(--el-font-size-extra-small);">毛泽东选集</div>
          </div>
          <div>
            <el-image style="width: 100px; " src="https://img2.doubanio.com/view/subject/l/public/s1106951.jpg" fit="contain" />
            <div style="font-size: var(--el-font-size-extra-small);">毛泽东选集</div>
          </div>
        </el-space>
      </el-col>
    </el-row>
  </div>
</template>


<script setup>
import { Search } from '@element-plus/icons-vue'
</script>
<script>

export default {
  name: 'App',
}
</script>

<style>
#app{
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
.m-200{
  margin: 200px 0 100px 0;
}
.book-info .el-space__item{
  width: 100%;
}
.intro p {
  text-indent: 2em;
  word-break: normal;
  font: 13px Helvetica,Arial,sans-serif;
  line-height: 1.62;
  color: #111;
}
</style>
