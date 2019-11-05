<template>
  <DefaultLayout :name="name" :type="type">
    <div class="article_header">Write Article</div>
    <div class="articles">
      <WriteArticle/>
    </div>

    <div v-if="articles.length>0">
      <div class="article_header">Articles</div>
      <div class="articles">
        <Article
          v-for="(article) in articles"
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
import { getFilteredArticles } from '../utils';
import { IArticle } from '../interfaces';

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

  private get articles(): Array<IArticle> {
    return getFilteredArticles(this.$store.getters.articles, { type: this.type, name: this.name });
  }
}
</script>