<div style="text-align: center">
  <img style="display: block; margin: 0 auto; width: 300px;" :src="$withBase('/images/meow.gif')" alt="foo">
  <h1>吹口琴的喵~</h1>
  <p class="description">前端分享</p>
  <p>
    <a :href="$withBase('/zh/blog/')" class="action-button">Get Start→</a>
  </p>
</div>

<style>
  .description{
    font-size: 1.6rem;
    line-height: 1.3;
    color: #6a8bad;
  }
  .action-button{
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: #3eaf7c;
    padding: .8rem 1.6rem;
    border-radius: 4px;
    -webkit-transition: background-color .1s ease;
    transition: background-color .1s ease;
    box-sizing: border-box;
    border-bottom: 1px solid #389d70;
  }
</style>