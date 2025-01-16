<template>
    <div>
        <Toast position="top-center">
            <template #container="{ message, closeCallback }">
                <div style="padding:10px; font-family:'ChungbukNationalUniversity';">
                    <div style="text-align: center; font-size: 18px;">
                    {{ message.summary }}
                </div>
                <div style="text-align: center;">
                    {{ message.detail }}
                </div>
                    </div>
                
            </template>
        </Toast>
    
    <div style="margin-top:10px; background-color: white; padding: 10px;">
        <div style="text-align: center; font-size: 25px; font-weight: bold;">
            내 스템프 확인하기
        </div>
        <Divider style="margin-left:20px; margin-right:20px;"></Divider>
        <div style="text-align: center; font-size: 18px; margin-top: 10px;">
            {{nickname}}님 안녕하세요!
        </div>
        <div style="text-align: center; font-size: 20px; margin-top: 10px;">
            내가 모은 총 스템프는 {{ point }}개
        </div>
        <Divider style="margin-left:20px; margin-right:20px;"></Divider>
        <div style="gap:20px; display:flex; flex-wrap: wrap; text-align: center; justify-content: center;  margin-left:auto; margin-right:auto">
            <div>
                <img :class="stemp.indexOf('SW-AI') != -1 ? 'stemp' : 'stemp-offline'" src="https://synol.jiwon1300.kro.kr/stemp.png">
                <div style="width: 120px; font-size: 16px; margin-top: 10px;">SW-AI 동아리</div>
            </div>
            <!-- <Divider :isV="true"></Divider> -->
            <div>
                <img :class="stemp.indexOf('의학탐구') != -1 ? 'stemp' : 'stemp-offline'" src="https://synol.jiwon1300.kro.kr/stemp.png">
                <div style="width: 120px; font-size: 16px; margin-top: 10px;">의학탐구 동아리</div>
            </div>

            <div>
                <img :class="stemp.indexOf('외국어탐구생활') != -1 ? 'stemp' : 'stemp-offline'" src="https://synol.jiwon1300.kro.kr/stemp.png">
                <div style="width: 120px; font-size: 16px; margin-top: 10px;">외국어탐구생활<br>동아리</div>
            </div>
            <!-- <Divider :isV="true"></Divider> -->
            <div>
                <img :class="stemp.indexOf('사진영상') != -1 ? 'stemp' : 'stemp-offline'" src="https://synol.jiwon1300.kro.kr/stemp.png">
                <div style="width: 120px; font-size: 16px; margin-top: 10px;">사진영상 동아리</div>
            </div>
            <div>
                <img :class="stemp.indexOf('영자신문') != -1 ? 'stemp' : 'stemp-offline'" src="https://synol.jiwon1300.kro.kr/stemp.png">
                <div style="width: 120px; font-size: 16px; margin-top: 10px;">영자신문 영어회화<br>동아리</div>
            </div>
            <div>
                <img :class="stemp.indexOf('벌크업') != -1 ? 'stemp' : 'stemp-offline'" src="https://synol.jiwon1300.kro.kr/stemp.png">
                <div style="width: 120px; font-size: 16px; margin-top: 10px;">벌크업 동아리</div>
            </div>
            <div>
                <img :class="stemp.indexOf('수학사랑') != -1 ? 'stemp' : 'stemp-offline'" src="https://synol.jiwon1300.kro.kr/stemp.png">
                <div style="width: 120px; font-size: 16px; margin-top: 10px;">수학사랑 동아리</div>
            </div>
            <div>
                <img :class="stemp.indexOf('창의공학탐구') != -1 ? 'stemp' : 'stemp-offline'" src="https://synol.jiwon1300.kro.kr/stemp.png">
                <div style="width: 120px; font-size: 16px; margin-top: 10px;">창의공학탐구<br>동아리</div>
            </div>
            <div>
                <img :class="stemp.indexOf('시사탐구') != -1 ? 'stemp' : 'stemp-offline'" src="https://synol.jiwon1300.kro.kr/stemp.png">
                <div style="width: 120px; font-size: 16px; margin-top: 10px;">시사탐구<br>동아리</div>
            </div>
            <div>
                <img :class="stemp.indexOf('독서를 통한 세상 읽기') != -1 ? 'stemp' : 'stemp-offline'" src="https://synol.jiwon1300.kro.kr/stemp.png">
                <div style="width: 120px; font-size: 16px; margin-top: 10px;">독서를 통한<br>세상 읽기 동아리</div>
            </div>
            <div>
                <img :class="stemp.indexOf('ARTTUBE') != -1 ? 'stemp' : 'stemp-offline'" src="https://synol.jiwon1300.kro.kr/stemp.png">
                <div style="width: 120px; font-size: 16px; margin-top: 10px;">ARTTUBE<br>동아리</div>
            </div>
            <div>
                <img :class="stemp.indexOf('공간을 만들자') != -1 ? 'stemp' : 'stemp-offline'" src="https://synol.jiwon1300.kro.kr/stemp.png">
                <div style="width: 120px; font-size: 16px; margin-top: 10px;">공간을 만들자<br>동아리</div>
            </div>
            <div>
                <img :class="stemp.indexOf('경영 경제') != -1 ? 'stemp' : 'stemp-offline'" src="https://synol.jiwon1300.kro.kr/stemp.png">
                <div style="width: 120px; font-size: 16px; margin-top: 10px;">경영 경제<br>동아리</div>
            </div>
            <div>
                <img :class="stemp.indexOf('스포츠 전략 탐구') != -1 ? 'stemp' : 'stemp-offline'" src="https://synol.jiwon1300.kro.kr/stemp.png">
                <div style="width: 120px; font-size: 16px; margin-top: 10px;">스포츠 전략 탐구<br>동아리</div>
            </div>
            <div>
                <img :class="stemp.indexOf('천체 관측') != -1 ? 'stemp' : 'stemp-offline'" src="https://synol.jiwon1300.kro.kr/stemp.png">
                <div style="width: 120px; font-size: 16px; margin-top: 10px;">천체 관측<br>동아리</div>
            </div>
            <div>
                <img :class="stemp.indexOf('마음 살핌') != -1 ? 'stemp' : 'stemp-offline'" src="https://synol.jiwon1300.kro.kr/stemp.png">
                <div style="width: 120px; font-size: 16px; margin-top: 10px;">마음 살핌<br>동아리</div>
            </div>
            <div>
                <img :class="stemp.indexOf('법과 사전') != -1 ? 'stemp' : 'stemp-offline'" src="https://synol.jiwon1300.kro.kr/stemp.png">
                <div style="width: 120px; font-size: 16px; margin-top: 10px;">법과 사전<br>동아리</div>
            </div>
            <div>
                <img :class="stemp.indexOf('수학 원리') != -1 ? 'stemp' : 'stemp-offline'" src="https://synol.jiwon1300.kro.kr/stemp.png">
                <div style="width: 120px; font-size: 16px; margin-top: 10px;">수학 원리<br>동아리</div>
            </div>
        </div>
        
    </div>
</div>

</template>

<style>
.stemp{
    width:100px;

}
.stemp-offline{
    width:100px;
    filter: grayscale(100%);
    
}
</style>

<script setup>
import { inject, onMounted, ref } from 'vue';
import Divider from '../components/Divider.vue'
import { Toast, useToast } from 'primevue';
import {useRoute, useRouter} from 'vue-router'
import axios from 'axios'

const route = useRoute()
const toast = useToast();
const $cookies = inject('$cookies');
const router = useRouter();
const nickname = ref("")
const point = ref(0)
const stemp = ref(
    [
        
    ]
)


onMounted(()=>{
    nickname.value = $cookies.get('nickname')
    if(nickname.value == null){
        return router.push("/registerpoint")
    }
    // 파라미터 확인
    if(route.query.earnid != null){
        const earnid = route.query.earnid;
        router.replace("/mypoint")
        axios.post('/user/earnpoint',{
            nickname:nickname.value,
            clubId:earnid
        }).then((res)=>{
            toast.add({
                severity:'success',
                life:4000,
                summary:'적립 완료!',
                detail:`${res.data.clubName} 동아리에서 스템프 1개가 적립되었습니다!`
            })
            loadPoint()
        }).catch(err=>{
            if(err.status == 401){
                toast.add({
                severity:'error',
                life:4000,
                summary:'적립 실패',
                detail:`이미 스템프를 받았습니다`
            })
            }else{
                toast.add({
                severity:'error',
                life:4000,
                summary:'오류',
                detail:`일시적인 오류가 발생했습니다`
            })
            }
            loadPoint()
        })
    }else loadPoint()
    
})

function loadPoint(){
    axios.get('/user/point',{
        params:{
            nickname:nickname.value
        }
    }).then((res)=>{
        
        if(res.data != null){
            point.value = res.data.length
            stemp.value = res.data
        }
    })
}


</script>