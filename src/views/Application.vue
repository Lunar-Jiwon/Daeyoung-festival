<script setup>
import { ConfirmDialog, Message, Toast, useToast } from 'primevue';
import { ref, watch } from 'vue';
import axios from 'axios'
import { useConfirm } from "primevue/useconfirm";
import Divider from '../components/Divider.vue';

const successDialog = ref(false)

const toast = useToast();
const applicationForm = ref({
    teamName: '',
    teamLeader: '',
    teamPhoneNumber: '',
    teamMember: '',
    topic: 'sing',
    music: '',
    request: ''

})

// 신청 허용
const isApplication = ref(false)

// const isLeaderError = ref(false)
// const isTeamNameError = ref(false)
const isFormLoading = ref(false);

// watch(applicationForm.value,()=>{
//     if(applicationForm.value.teamName.length >= 2){
//         isTeamNameError.value = false
//     } else isTeamNameError.value = true 

//     if(applicationForm.value.teamLeader.length >= 1){
//         isLeaderError.value = false
//     } else isLeaderError.value = true 

// })

async function submit() {
    
    // console.log(/^[0-9]*$/.test(applicationForm.value.teamPhoneNumber))
    if(!(/^[0-9]*$/.test(applicationForm.value.teamPhoneNumber)) || applicationForm.value.teamPhoneNumber.length != 11){
        toast.add({ severity: 'error', summary: '전화번호 오류', detail: '숫자로 구성된 11자리 전화번호를 입력해주세요', life: 4000 })
    }else if (applicationForm.value.teamName.length >= 2 && applicationForm.value.teamLeader.length >= 1) {
        isFormLoading.value = true
        try{
            await axios({
                url:'/api/submit',
                method:'POST',
                data:applicationForm.value
            })
            successDialog.value = true
            applicationForm.value = {
                teamName: '',
                teamLeader: '',
                teamPhoneNumber: '',
                teamMember: '',
                topic: 'sing',
                music: '',
                request: ''

            }
        }catch(error){
            console.log(error)
            toast.add({ severity: 'error', summary: '오류', detail: '오류가 발생하였습니다.\n관리자에게 문의해주세요(01075023924)', life: 4000 })
        }
        isFormLoading.value = false
        


        // toast.add({ severity: 'info', summary: '준비중입니다', detail: '2024년 12월 20일 오후 12시에 접수가 시작됩니다', life: 3000 })
    } else {
        toast.add({ severity: 'error', summary: '미기입 오류', detail: '*표 입력란을 모두 채워주세요', life: 3000 })
    }


}

function topicChange(topic) {
    applicationForm.value.topic = topic
}

</script>

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
        <Dialog v-model:visible="successDialog" modal header="신청 완료" style="width: max-content;">
            대영고등학교 비상 예술제 참가 신청이 완료되었습니다!
            <br>
            검토 후 입력한 연락처로 안내 문자를 발송해드리겠습니다!
            <div style="margin-left: auto; text-align: right; margin-top: 20px;">
                <Button style="margin-left: auto;" type="button" label="확인" @click="successDialog = false"></Button>
            </div>
        </Dialog>

        <div style="position: relative;">
            <div
                style="display: flex; width: 100%; position: absolute; z-index: 100; transform: translate(-50%, -50%); left:50%; top: 50%;  font-weight: bold; color:white;">
                <div class="application-title">
                    대영고등학교 비상 예술제 참가 신청
                </div>

                <img class="application-image"
                    src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Memo/3D/memo_3d.png"
                    style="">
            </div>
            <div class="application-bg-image" style="">
                <img src="../assets/background4.jpg"
                    style="filter:blur(2px);  object-fit: cover; width: 100%; height: 100%;">
            </div>
        </div>
        <div>

            <div class="notice" style="background-color: #4287f5;">
                참가 신청이 종료되었습니다!<br>신청해주신 많은 분들께 깊은 감사인사 드립니다.
            </div>
            
            <div class="application-card">
                <!-- <div
                    style="position: absolute; z-index: 10000; background-color: rgba(51, 51, 51, 0.667); width:max-content;">
                    <div style="text-align: center; margin-top:200px; color:white; font-size:25px; font-weight: bold;">
                        참가 신청 기간이 연장되었습니다!<br>2024년 12월 20일 ~ 2024년 12월 31일일
                    </div>
                </div> -->
                <Divider style="width: 80%; margin-left: auto; margin-right: auto;"></Divider>
                <div style="margin-top: 10px; text-align: center; ">
                    <div style="font-size: 22px; font-weight: bold;">비상 예술제 참가 신청서</div>
                    <div style="margin-top: 10px;">성실하게 작성해주세요</div>
                </div>
                <Divider style="width: 80%; margin-left: auto; margin-right: auto;"></Divider>
                <div style="text-align:center;" v-if="!isApplication ">
                    참가 신청이 종료되었습니다!<br>2025년 1월 7일 많은 기대와 관심 부탁드립니다!
                </div>
                <div style="text-align: center;" v-if="isApplication">
                    
                    <div class="form-body">
                        <div style="font-size: 17px; text-align: left; margin-bottom: 10px;">*팀 이름</div>
                        <InputText :disabled="isFormLoading" v-model="applicationForm.teamName"
                            placeholder="팀 이름을 입력해주세요" style="width: 100%; color: black;" />
                        <div style="transition: 0.2s; text-align: left; margin-left: 2px; margin-top: 2px; color:red;" v-if="isTeamNameError">2글자 이상 입력해주세요</div>
                    </div>

                    <div class="form-body">
                        <div style="text-align: left; font-size: 17px; margin-bottom: 10px;">*팀장 이름</div>
                        <InputText :disabled="isFormLoading" v-model="applicationForm.teamLeader"
                            placeholder="팀장 이름을 입력해주세요" style="width: 100%; color: black;" />
                        
                    </div>
                    <div class="form-body">
                        <div style="text-align: left; font-size: 17px; margin-bottom: 10px;">*팀장 연락처 (-로 구분없이 입력, 010포함)</div>
                        <InputText :disabled="isFormLoading" v-model="applicationForm.teamPhoneNumber"
                            placeholder="팀장 전화번호를 입력해주세요 (11자리)" style="width: 100%; color: black;" />
                    </div>
                    <div class="form-body">
                        <div style="text-align: left; font-size: 17px; margin-bottom: 10px;">팀원 명단 (,로 구분 / 재학생 : 1101
                            둘리)</div>
                        <InputText :disabled="isFormLoading" v-model="applicationForm.teamMember"
                            placeholder="팀원 이름을 나열해주세요" style="width: 100%; color: black;" />
                    </div>

                    <div class="form-body" style="text-align: left;">
                        <div style="text-align: left; font-size: 17px; margin-bottom: 10px;">팀 주제</div>
                        <div style="flex-wrap: wrap; display: flex; gap: 10px;">
                            <div @click="topicChange('sing')" style="display: flex; cursor: pointer;">
                                <RadioButton :disabled="isFormLoading" v-model="applicationForm.topic" value="sing" />
                                <div style=" margin-left: 5px; margin-top: 1px;">노래</div>
                            </div>
                            <div @click="topicChange('action')" style="cursor: pointer; display: flex;">
                                <RadioButton :disabled="isFormLoading" v-model="applicationForm.topic" value="action" />
                                <div style="margin-left: 5px; margin-top: 1px;">연극</div>
                            </div>
                            <div @click="topicChange('dance')" style="cursor: pointer; display: flex;">
                                <RadioButton :disabled="isFormLoading" v-model="applicationForm.topic" value="dance" />
                                <div style="margin-left: 5px; margin-top: 1px;">댄스</div>
                            </div>
                            <div @click="topicChange('instrument')" style="cursor: pointer; display: flex;">
                                <RadioButton :disabled="isFormLoading" v-model="applicationForm.topic"
                                    value="instrument" />
                                <div style="margin-left: 5px; margin-top: 1px;">악기</div>
                            </div>
                            <div @click="topicChange('magic')" style="cursor: pointer; display: flex;">
                                <RadioButton :disabled="isFormLoading" v-model="applicationForm.topic" value="magic" />
                                <div style="margin-left: 5px; margin-top: 1px;">마술</div>
                            </div>
                            <div @click="topicChange('stage')" style="cursor: pointer; display: flex;">
                                <RadioButton :disabled="isFormLoading" v-model="applicationForm.topic" value="stage" />
                                <div style="margin-left: 5px; margin-top: 1px;">공연</div>
                            </div>
                            <div @click="topicChange('masksing')" style="cursor: pointer; display: flex;">
                                <RadioButton :disabled="isFormLoading" v-model="applicationForm.topic"
                                    value="masksing" />
                                <div style="margin-left: 5px; margin-top: 1px;">복면가왕</div>
                            </div>
                            <div @click="topicChange('etc')" style="cursor: pointer; display: flex;">
                                <RadioButton :disabled="isFormLoading" v-model="applicationForm.topic" value="etc" />
                                <div style="margin-left: 5px; margin-top: 1px;">기타(개그, 포퍼먼스 등)</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-body">
                        <div style="text-align: left; font-size: 17px; margin-bottom: 10px;">재생곡</div>
                        <InputText :disabled="isFormLoading" v-model="applicationForm.music"
                            placeholder="필요 음원의 영상 링크를 입력해주세요" style="width: 100%; color: black;" />
                    </div>
                    <div class="form-body">
                        <div style="text-align: left; font-size: 17px; margin-bottom: 10px;">관리자 요청사항 (예 : 1분 30초부터 재생해주세요)</div>
                        <Textarea :disabled="isFormLoading" v-model="applicationForm.request" placeholder="요청사항을 입력해주세요"
                            style="width: 100%; color: black; height: 150px;" />
                    </div>
                    <Button :loading="isFormLoading" @click="submit()" class="form-body" style="height: 40px;">
                        참가 신청하기
                    </Button>
                </div>
            </div>
        </div>

    </div>
</template>

<style>

.notice{
     width:80%; margin-left:auto; margin-right:auto; margin-top:10px; font-size: 18px; text-align:center; color:white;  border-radius: 10px; padding:10px;
}
.application-title {
    margin-left: auto;
    font-size: 28px;
}

.application-image {
    margin-right: auto;
    width: 40px;
    
    margin-top: -5px;
}

.application-bg-image {
    object-fit: cover;
    width: 100%;
    z-index: -1;
    height: 300px;
    overflow: hidden;
}

.form-body {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}

.application-card {
    width: 80%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    padding: 10px;
    background: white;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

@media screen and (max-width:1024px) {
    .notice{
         width:100%; margin-top:10px; font-size: 16px; text-align:center; color:white;  border-radius: 0px; padding:10px;
    }
    .application-bg-image {
        object-fit: cover;
        width: 100%;
        z-index: -1;
        height: 200px;
        overflow: hidden;
    }
    .application-card {
        width: 100%;
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 10px;
        padding: 10px;
        background: white;
        box-shadow: none;
    }

    .application-title {
        margin-left: auto;
        font-size: 24px;
    }

    .application-image {
        width: 30px;
        margin-top: -5px;
        margin-right: auto;
    }

    .form-body {
        margin-left: auto;
        margin-right: auto;
        width: 92%;
    }

    .card {
        width: 90%;
    }
}
</style>
