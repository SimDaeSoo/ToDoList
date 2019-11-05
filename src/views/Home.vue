<template>
  <DefaultLayout :name="name" :type="type">
    <div class="article_header">Write Article</div>
    <div class="articles">
      <WriteArticle/>
    </div>

    <div v-if="$store.getters.articles.length>0">
      <div class="article_header">Articles</div>
      <div class="articles">
        <Article
          v-for="(article) in $store.getters.articles"
          :key="'articles'+article.articleID"
          :article="article"
        />
      </div>
    </div>
  </DefaultLayout>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Article from '../components/Article.vue';
import WriteArticle from '../components/WriteArticle.vue';

@Component({
  components: {
    DefaultLayout,
    Article,
    WriteArticle
  }
})
export default class Home extends Vue {
  @Prop()
  private name: string;
  @Prop()
  private type: string;
}
</script>