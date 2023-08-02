<template>
    <div class="side_card home_info">
        <div class="author_img">
            <img src="../assets/images/blog1.png" alt="">
            <p>name</p>
        </div>
        <div class="author_tag">
            <div class="tagitem">
                <a href="">
                    <div class="tagcount">文字</div>
                    <div class="tagname">1</div>
                </a>
            </div>
            <div class="tagitem">
                <a href="">
                    <div class="tagcount">文字</div>
                    <div class="tagname">1</div>
                </a>
            </div>
            <div class="tagitem">
                <a href="">
                    <div class="tagcount">文字</div>
                    <div class="tagname">1</div>
                </a>
            </div>
        </div>
    </div>  
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.author_img{
    height: 50%;
    width: 100%;
    display: block;
    max-width: 10rem;
    margin: 0 auto;
    padding: 0.125rem;
    img{
        width: 100%;
        height:100%;
        border-radius: 50%;
        box-shadow: 0 0 1rem 0.125rem;
    }
    p{
        text-align: center;
        font-size: 1.5rem;
    }
}
.author_tag{
    display: flex;
    justify-content: center;
    margin: 4.6rem auto;
    line-height: 2rem;
    text-align: center;
    width: 80%;
    background-color: #fff;
    .tagitem {
        color: #424040;
        padding: 0 0.7rem;
        .tagcount {
            font-size: 1.2rem;
            font-weight: 600;
            text-align: center;
        }       
    }
    .tagitem:not(:first-child) {
        border-left: 0.0625rem solid #424040;
    }
}

</style>