<template>
  <div class="blog_content">
    <div class="blog_img">
        <img src="../assets/images/blog1.png" alt="">
    </div>
    <div class="blog">
        <div class="blog_time">
            <i class="el-icon-date"></i>
            <p>2020-03-01</p>
        </div>
        <div class="words">
            <h3>博客介绍</h3>
            <p class="hid">assnxd该IUAWUM十年风雨从容牛粪FGEYWFMCEFNGGgyunebgybgsngxnnjannsjhxehcfekbu
                dcnaejuhxsmkfhMhcjfksnhfunfiwuianlw爱丁堡iu但是佛年初五i的方式怒斥纽曼上的贸促会封按市场分月农户册封户外i每次u回复我关宁微信KMCUHFWIC NFsfcd gni吗欸u和fig胡给三年废墟也I GVT号处理漫画欧美性爱X那你粗尼木县的话是非常
            </p>
        </div>
        <div class="blog_tag">
            <i class="el-icon-price-tag" style="padding-top: 0.4rem;">项目</i>
            <div class="more_btn">
                <a href="">more</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.blog_content{
    width: 100%;
    height: 14rem;
    margin: 1rem 0;
    border-radius: 0.5rem;
    box-shadow: 0 0.625rem 1.875rem -0.9375rem;
    display: flex;
    overflow: hidden;
    .blog_img{
        width: 40%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            border-radius: 4%;
        }
    }
    .blog{
        width: 61%;
        height: 100%;
        padding-left: 0.5rem;
        .blog_time{
            display: flex;
            justify-content: end;
            width: 100%;
            height:15%;
            padding-right: 0.5rem;
            i{
                padding: 0.6rem;
                width: 2rem;
            }
            p{
                width: 6.5rem;
                color: #c2bfbf;
                line-height:0.3rem;
            }
        }
        .words{
            height: 61.5%;
            margin: 2.5% 0;
            H3{
                color: #8cc18d;
                margin: 0;
                padding: 0;
            }
            p{
                max-height: 80%;
                line-height: 1.5rem;
                margin: 10px 0 0 0 ;
                font-size: .875em;
                overflow: hidden;
                -webkit-line-clamp: 4;
            }
        }

        .blog_tag{
            height: 15%;
            display: flex;
            justify-content: space-between;
            .more_btn{
                padding: 0.1rem 1rem;
                border-radius: 1rem 0;
                background-color: #4e8255;
            }
        }
    }
}
</style>