<script setup >

import { onBeforeUnmount, onMounted, ref } from 'vue';
import {useRouter} from 'vue-router'

import Divider from '../components/Divider.vue';
// const marker = ref();
const router = useRouter();
// const infoWindow = ref();
// const onLoadMarker = (markerObject) => {
//   marker.value = markerObject;
// };
// const mapOptions = {
//     latitude:36.8076653,
//     longitude:128.6325708,
//     zoom:18,
//     zoomControl: false,
//     zoomControlOptions:{
//         position:"TOP_RIGHT"
//     }
// }
// const onLoadInfoWindow = (infoWindowObject) => {
//   infoWindow.value = infoWindowObject;
// };

function openPls(){
    // router.go('https://www.youtube.com/playlist?list=PLi52Y-lwTA2TcSlRcULYXqg_xUn3rCCkn')
    window.location.href = 'https://www.youtube.com/playlist?list=PLi52Y-lwTA2TcSlRcULYXqg_xUn3rCCkn'
}

onMounted(()=>{

    var daeyoung = new naver.maps.LatLng(36.8076653,128.6325708),
        map = new naver.maps.Map('map-style', {
            center: daeyoung.destinationPoint(0, 0),
            zoom: 16
        }),
        marker = new naver.maps.Marker({
            map: map,
            position: daeyoung
        });

    var contentString = [
            '<div style="padding:10px; width:200px; text-align:center; ">',
            '   <h4 style="margin-top:-2px; margin-bottom:10px;">대영고등학교 독수리관</h4>',
            '   <img src="https://synol.jiwon1300.kro.kr/dog.png" style="width:100%; border-radius: 10px;"><br />',
            '   ',
            '</div>'
        ].join('');

    var infowindow = new naver.maps.InfoWindow({
        content: contentString
    });
    infowindow.open(map, marker);
})
</script>

<template>
    <div class="main" >
        <div class="home-title-box">
            <div class="home-title">
                2024학년도 영주시 학생들과 함께하는<br> 비상 예술제
            </div>
            <div class="application-button" @click="openPls()">
            2024학년도 비상 예술제 돌아보기
        </div>                
            </div>

        <div class="background-img">
            <img src="../assets/background1.jpg" style="object-fit: cover; width: 100%; height: 100%;">
        </div>
        
        <div class="contents">
            <Divider style=""></Divider>
            <div style="text-align: center; font-size: 25px; font-weight: bold; ">
                2024학년도 비상 예술제 정보
            </div>
            <div style="text-align:center; margin-top:5px;">
                일정 및 장소와 초청팀을 확인하세요!
            </div>
            <Divider style="margin-top:10px;"></Divider>
            <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 15px; margin-top: 20px;">
                <div class="card" style="padding: 20px;">
                    <div style="display: flex;">
                        <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Tear-off%20calendar/3D/tear-off_calendar_3d.png" style="width: 40px;">
                        <div style="font-size: 20px; font-weight: bold; margin-left: 10px; margin-top: auto; margin-bottom: auto;">
                            비상 예술제 행사 기본 정보
                        </div>
                    </div>    
                    <Divider></Divider>
                    <div class="card-title" style="">
                        일시
                    </div>
                    2025년 1월 7일 화요일
                    <br >
                    <div class="card-title" style="margin-top: 10px;">
                        장소
                    </div>
                    본교 독수리관 (경상북도 영주시 구성로150번길 45)
                    <div id="map-style"></div>
                    
                </div>
                <div class="card" style="padding: 20px;">
                    <div style="display: flex;">
                        <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Hundred%20points/3D/hundred_points_3d.png" style="width: 40px;">
                        <div style="font-size: 20px; font-weight: bold; margin-left: 10px; margin-top: auto; margin-bottom: auto;">
                            예술제 관람 포인트
                        </div>
                    </div>    
                    <Divider></Divider>
                    <div class="card-title" style="display: flex;">
                        <div style="margin-right:5px;">공연자에게 호응하기!</div>
                        <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Clapping%20hands/Default/3D/clapping_hands_3d_default.png" style="width: 30px;  margin-top: -6px;">
                    </div>
                    <div style="margin-left:5px;">여러분들의 열정적인 박수는 공연자에게 큰 힘이 됩니다!<br>축제 분위기를 만들어나가기 위해 박수와 응원을 질러주세요!</div>
                    <br >
                    <div class="card-title" style="display: flex;">
                        <div style="margin-right:5px;">다양한 경품 받아가기!</div>
                        <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Wrapped%20gift/3D/wrapped_gift_3d.png" style="width: 30px;  margin-top: -6px;">
                    </div>
                    <div style="margin-left:5px;">여러분들을 위한 축제이기에 다양한 상품을 준비했어요!<br>재밌게 즐기면서 상품도 타 가세요!</div>
                    <br >
                    <div class="card-title" style="display: flex;">
                        <div style="margin-right:5px;">공연 에티켓 지키기!</div>
                        <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Muted%20speaker/3D/muted_speaker_3d.png" style="width: 30px;  margin-top: -6px;">
                    </div>
                    <div style="margin-left:5px;">옆 친구들이 집중할 수 있도록 핸드폰은 무음으로!<br>서로가 배려하며 올바른 관람 문화를 만들어요!</div>
                    <br >
                </div>
                 <div class="card" style="padding: 20px;">
                    <div style="display: flex;">
                        <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Smiling%20face%20with%20sunglasses/3D/smiling_face_with_sunglasses_3d.png" style="width: 40px;">
                        <div style="font-size: 20px; font-weight: bold; margin-left: 10px; margin-top: auto; margin-bottom: auto;">
                            찬조 공연팀
                        </div>
                    </div>    
                    <Divider></Divider>
                        <div class="invite-team-box">
                            <div style="text-align: center;">
                                <img src="../assets/daeyoung_band.jpg " class="invite-team-image">
                                
                                <div style="margin-top: 10px;">
                                    대영고 밴드부(Tones)
                                </div>
                            </div>
                            <Divider class="invite-team-image-divider"  :isV="true"></Divider>
                            <div style="text-align: center;">
                                <img src="https://synol.jiwon1300.kro.kr/flex.jpg" class="invite-team-image"
                                style="object-position: 0px 15%;">
                                <div style="margin-top: 10px;">
                                    영주여고 댄스부(Flex)
                                </div>
                            </div>
                            <Divider class="invite-team-image-divider" :isV="true"></Divider>
                            <div style="text-align: center;">
                                <img src="https://synol.jiwon1300.kro.kr/youth.jpg" class="invite-team-image"
                                style="object-position: 0px 75%;">
                                <!-- <div class="invite-team-no-image">   
                                    사진 준비중
                                </div> -->
                                <div style="margin-top: 10px;">
                                    영광여고 밴드부(Youth)
                                </div>
                            </div>
                        </div>
                        <Divider></Divider>
                        <div class="invite-team-box">
                            <div style="text-align: center;">
                                <!-- <img src="../assets/daeyoung_band.jpg " class="invite-team-image"> -->
                                <div class="invite-team-no-image">   
                                    사진 준비중
                                </div>
                                <div style="margin-top: 10px;">
                                    한미산고 댄스부(Rose)
                                </div>
                            </div>
                            <Divider class="invite-team-image-divider"  :isV="true"></Divider>
                            <div style="text-align: center;">
                                <img src="https://synol.jiwon1300.kro.kr/ar.jpg" class="invite-team-image" style="object-position: 0px 35%;">
                                <!-- <div class="invite-team-no-image">   
                                    사진 준비중
                                </div> -->
                                <div style="margin-top: 10px;">
                                    영광고 댄스부(아리랑)
                                </div>
                            </div>
                            <Divider class="invite-team-image-divider" :isV="true"></Divider>
                            <div style="text-align: center;">
                                <img src="https://synol.jiwon1300.kro.kr/little.png" class="invite-team-image" style="">
                                <!-- <div class="invite-team-no-image">   
                                    사진 준비중
                                </div> -->
                                <div style="margin-top: 10px;">
                                    청문집 밴드부(Little By Little)
                                </div>
                            </div>
                        </div>
                        
                    </div>
                
            </div>
            <Divider style="margin-top:50px; margin-bottom: 10px;"></Divider>
            <div style="text-align: center; font-size: 25px; font-weight: bold; ">
                2023학년도 예술제 돌아보기
            </div>
            <div style="text-align:center; margin-top:5px;">
                작년에 진행한 예술제를 확인하세요!
            </div>
            <Divider style="margin-bottom: 20px;"></Divider>
            <div style="text-align: center; margin-left:auto; margin-right:auto; width:90vw; height:50vw">
                <iframe style="width:100%; height:100%;"  src="https://www.youtube.com/embed/videoseries?si=vYFxpN45IB-bZsuT&amp;list=PLi52Y-lwTA2QeZ8L4ForO0m-9H1OwRZIX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<style>




.invite-team-image-divider{
    display: block !important;
}
#map-style{
    margin-top: 10px; width: 25vw; height: 300px
}
.contents{
    margin-left: 50px;
    margin-top: 20px;
    margin-right: 50px;
}

.contents .card{
    border-radius: 10px; padding: 10px;  border-color: #adadaddc; background: white; box-shadow: 0 5px 5px rgba(0, 0, 0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.contents .card .card-title{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}

.application-button{
    
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    margin-top: 400px;
    cursor: pointer;
    text-align: center;
    border-radius: 30px;
    font-size: 18px;
    padding: 15px;
    padding-left: 30px;
    padding-right: 30px;
    /* transform: scale(0); */
    /* transition: 0.2s``; */
    background: linear-gradient(155deg, rgba(48,61,255,1) 0%, rgba(143,15,228,1) 94%, rgba(0,212,255,1) 100%);
    position: absolute;
    z-index: 1000; color:white;  top: 50%; left:50%; transform: translate(-50%, -50%); font-weight: bold;
}

.background-img{
    object-fit: cover;
    width: 100%;
    z-index: -1;
    height: 500px;
    overflow: hidden;
}
.home-title-box{
    position: relative; z-index: 1000; top:18%; left:50%; transform: translate(-50%, -50%); 
}
.home-title{
    text-align: center;
    width: 100%;
    color:white; font-size: 40px; 
    font-weight: bold;
    margin-top: 25px;
    position: absolute;z-index: 1000; color:white;
    top: 100%; left:50%;
    transform: translate(-50%, 0%); font-weight: bold;
}
.invite-team-image{
    object-fit: cover; border-radius: 10px; width: 200px; height: 120px;
}
.invite-team-no-image{
    background: #adadaddc; padding-top: 50px; width: 200px; height: 120px; border-radius: 10px;
}
.invite-team-box{
    display: flex;  flex-wrap: wrap;
}
@media screen and (max-width:1024px) {
    .contents .card .card-title{
        font-size: 18px;
        font-weight: bold;
        margin-top: 10px;
        margin-bottom: 5px;
    }
    .invite-team-no-image{
        margin-top: 10px;
        background: #adadaddc; padding-top: 100px; width: 100%; height: 200px; border-radius: 10px;
    }
    .invite-team-image{
        margin-top: 10px;
        width: 100%;
        height: 200px;
    }
    .invite-team-box{
        display: block;
    }
    .contents .card{
        width:100%;
        border-radius: 10px; padding: 10px;  border-color: #adadaddc; background: white; box-shadow: 0 5px 5px rgba(0, 0, 0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    .invite-team-image-divider{
        display: none !important;
    } 
    .background-img{
        object-fit: cover;
        width: 100%;
        z-index: -1;
        height: 300px;
        overflow: hidden;
    }
    .home-title{
        width: 80%;
        text-align: center;
        position: absolute;
        z-index: 1000;
        color:white;
        font-size: 25px; 
        top:12%;
        left:50%; transform: translate(-50%, 0%); font-weight: bold;
    }   
    .application-button{
        margin-top: 200px;
    }
    #map-style{
        margin-top: 10px; width: 100%; height: 300px;
    }
    .contents{
        margin-left: 5px;
        margin-top: 10px;
        margin-right: 5px;
    }
}
.main{
    height: 100%;
    /* margin-top: 10px; */
}
</style>
