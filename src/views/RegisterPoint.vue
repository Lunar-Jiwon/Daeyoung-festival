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
        <div style="margin-top: 20px; background-color: white; padding: 10px;">
            <div style="text-align: center; font-size: 25px; font-weight: bold;">
                내 스템프 확인하기
            </div>
            <Divider style="margin-left:20px; margin-right:20px;"></Divider>
            <div style="text-align: center; font-size: 15px; margin-top: 10px;">
                동아리 부스에 많이 방문해서 스템프를 받고 상품을 받아가세요!
            </div>
            <div style="text-align: center; width:100%; margin-top: 10px; padding-left: 20px; padding-right:20px;">
                <div style="text-align: left; font-size: 18px; margin-bottom:10px;">닉네임</div>
                <InputText v-model="requestName" type="text" placeholder="닉네임을 입력하세요" style="width: 100%;"></InputText>
                <Button @click="submit()" style="width: 100%; height: 40px; margin-top: 10px;">
                    스템프 적립 시작하기
                </Button>
                <div style="text-align: right; margin-top:10px;">
                    위 정보로 스템프가 자동 적립됩니다
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { inject, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useToast } from 'primevue';

const $cookies = inject('$cookies');
const router = useRouter();
const requestName = ref("")
const toast = useToast()

onMounted(()=>{
    const nickname = $cookies.get('nickname')
    if(nickname != null){
        router.push("/mypoint")
    }
})

async function submit(){
    const isExists = (await axios.get("/user/exists",{
        params:{
            nickname:requestName.value
        }
    })).data
    
    if(isExists){
        return toast.add({
            severity:'error',
            summary:'닉네임을 변경해주세요',
            detail:'이미 사용중인 닉네임입니다!',
            life:3000,
        })
    }
    await axios.post('/user/create',{
        nickname:requestName.value
    })
    $cookies.set("nickname",requestName.value)
    toast.add({
            severity:'success',
            summary:'등록되었습니다!',
            detail:'이제 동아리 스템프를 받으세요!',
            life:3000,
        })
    router.push("/mypoint")
}
</script>