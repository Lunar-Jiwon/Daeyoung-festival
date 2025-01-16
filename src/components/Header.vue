
<template>
    <div class="header-main">
        <div class="logo" @click="$router.push('/')">
            <img src="../assets/logo.png" class="logo-image" />
            <div style="margin-top: auto; margin-bottom: auto; margin-left: 10px;">
                대영고등학교 비상 예술제
            </div>
        </div>
        <div class="menu-buttons">
            <div class="button" @click="$router.push('/')">
                비상 예술제
            </div>
            <div>
            |
            </div>
            <div class="button" @click="$router.push('/timetable')">
                시간표
            </div>
            <div>
            |
            </div>
            <div class="button" @click="$router.push('/application')">
                참가 신청
            </div>
        </div>
        <div class="menu">
            <img @click="menuVisiable = !menuVisiable" class="menu-button" src="../assets/menuIcon.svg"/>
            </div>
    </div>
    <Drawer v-model:visible="menuVisiable" >
        <template #header>
            <div style="display: flex;">
                <img src="../assets/logo.png" style="width: 35px;"/>
            <div style="margin-top: auto; margin-bottom: auto; margin-left: 10px; font-family: 'ChungbukNationalUniversity'; font-weight: bold; color:black">
                대영고등학교 비상 예술제
            </div>
            </div>
        </template>
    <div style="font-family: 'ChungbukNationalUniversity';">
        <div style="font-size: 15px; color:black; text-align: center">
            영주시 청소년들과 함께하는 축제!
            </div>
        <Divider ></Divider>
        <div class="drawer-button" @click="$router.push('/'); menuVisiable = !menuVisiable;">비상 예술제
            </div>
            <Divider></Divider>
            <div class="drawer-button" @click="$router.push('/timetable'); menuVisiable = !menuVisiable">
                시간표
            </div>
            <Divider></Divider>
            <div class="drawer-button" @click="$router.push('/application'); menuVisiable = !menuVisiable">
                참가 신청
            </div>
            <Divider></Divider>
            
        </div>
    </Drawer>

</template>

<style>

.drawer-button{
    cursor: pointer;
    color: black;
    transition: 0.4s;
}

.drawer-button:hover{
    cursor: pointer;
    color: rgb(18, 53, 252);
    transition: 0.4s;
}


.header-main{
    box-shadow: 0 2px 5px rgba(0, 0, 0,0.25), 0 2px 2px rgba(0,0,0,0.22);
    padding-top: 15px; display: flex;
    padding-bottom: 28px;
}
.menu-button{
    cursor: pointer;
    width: 28px;
    height: 28px;
}
.menu{
    margin-right: 10px;
    margin-left: auto;
    margin-top: 4px;
    display: none;
}

.menu-buttons{
    display:block;
    margin-top: 12px;
    margin-left: auto;
    margin-right: 50px;
    display: flex;
    gap: 20px;
    font-size: 20px;
    /* font-weight: bold; */
}

.menu-buttons .button{
    cursor: pointer;
    transition: 0.2s;
}

.menu-buttons .button:hover{
    color: #0059ff;
    transition: 0.2s;
    
}

.logo{
    cursor: pointer;
    position: absolute;
    margin-left: 100px;
    display: flex;
    font-weight: 700;
    font-size: 23px;
}
.logo .logo-image{
        width: 55px;
    }
@media screen and (max-width:1024px) {
    .logo {
        margin-left: 10px;
        font-size: 18px;
    }
    .menu-buttons{
       display: none;
    }
    .menu{
        display: block;
    }
    .logo .logo-image{
        width: 35px;
    }
    .header-main{
        padding-top: 15px; display: flex;
        padding-bottom: 10px;
    }

}



</style>

<script setup>
import { ref } from 'vue';
import Divider from './Divider.vue';

const menuVisiable = ref(false)
</script>