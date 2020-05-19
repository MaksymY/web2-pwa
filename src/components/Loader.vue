<template>
    <div class="content">
        <div class="content__loader"></div>
    </div>
</template>
<style lang="scss">
.content {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 100%;

    &__loader {
        left: 0;
        right: 0;
        -webkit-animation: spin 1s linear infinite;
        animation: spin 1s linear infinite;
        border: 3px solid #ddd;
        border-top: 3px solid #42a5f5;
        border-radius: 50%;
        height: 75px;
        width: 75px;
    }

    @-webkit-keyframes spin {
        to {
            border-top-color: #ec407a;
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes spin {
        to {
            border-top-color: #ec407a;
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
}
</style>
