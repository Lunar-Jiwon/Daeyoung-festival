<script setup lang="ts">
import { onMounted } from 'vue';
import Divider from '../components/Divider.vue';
import { useRouter } from 'vue-router';
const router = useRouter()
onMounted(()=>{
    // alert("준비중입니다!")
    // router.back()
})

const timeTable1 = [
    {
        time:"14:30 ~ 14:45",
        explain:"밴드부 개막식 축하공연 - 본교 밴드부(Tones)",
    },
    {
        time:"14:45 ~ 14:55",
        explain:"뱅뱅뱅 - BIGBAANG(1학년 1반)",
    },
    {
        time:"14:55 ~ 15:05",
        explain:"뮤지컬 - 2학년 1반",
    },
    {
        time:"15:05 ~ 15:15",
        explain:"붉은 노을 - 1학년 2반",
    },
    {
        time:"15:15 ~ 15:25",
        explain:"뉴페이스 - 2학년2반 김유현이다",
    },
    {
        time:"15:25 ~ 15:35",
        explain:"붕붕 - 힙찔이들(1학년 3반)",
    },
    {
        time:"15:35 ~ 15:45",
        explain:"첫 만남은 계획대로 되지 않아 - 아메바즈",
    },
    {
        time:"15:45 ~ 15:50",
        explain:"즉석 참여 장기자랑",
    },
    {
        time:"15:50 ~ 16:00",
        explain:"휴식시간",
    },
    {
        time:"16:00 ~ 16:20",
        explain:"영주여자고등학교 댄스부 Flex",
    },

    {
        time:"16:20 ~ 16:30",
        explain:"날봐 귀순 - 1학년 4반",
    },
    {
        time:"16:30 ~ 16:40",
        explain:"시상식 - 2학년 4반",
    },
    {
        time:"16:40 ~ 17:00",
        explain:"학급별 장기자랑 시상식",
    },
]

const timeTable2 = [
    {
        time:"18:00 ~ 18:20",
        explain:"영광여자고등학교 밴드부 Youth",
    },
    {
        time:"18:20 ~ 18:25",
        explain:"애상 - 음치듀오",
    },
    {
        time:"18:25 ~ 18:35",
        explain:"난타 공연 - 노수영",
    },
    {
        time:"18:35 ~ 18:55",
        explain:"영주여자중학교 밴드부 캐터필러",
    },
    {
        time:"18:55 ~ 19:10",
        explain:"한국미래산업고등학교 댄스부 Rose",
    },
    {
        time:"19:10 ~ 19:20",
        explain:"스몰뱅 - 맨정신, 블루",
    },
    {
        time:"19:20 ~ 19:35",
        explain:"복면가왕 준결승",
    },
    {
        time:"19:35 ~ 19:45",
        explain:"복면가왕 결승",
    },
    {
        time:"19:45 ~ 20:00",
        explain:"영광고등학교 댄스부 아리랑",
    },
    {
        time:"20:00 ~ 20:05",
        explain:"최성원 - 사랑 참",
    },
    {
        time:"20:05 ~ 20:20",
        explain:"PRISMA (프리즈마)",
    },
    {
        time:"20:20 ~ 20:25",
        explain:"대영오브라이프 - 이글루",
    },
    {
        time:"20:25 ~ 20:30",
        explain:"준딱모 - 뱅뱅뱅뱅",
    },
    {
        time:"20:30 ~ 20:50",
        explain:"청소년문화의집 밴드부 Little By Little",
    },
]


</script>

<style>
.time-table-container{
    display: flex; gap:10px; justify-content: center; flex-wrap: wrap; margin-left:20px; margin-right:20px; margin-top:20px;
}

@media screen and (max-width:1024px) {
    .time-table-container{
        justify-content: center;
        display: flex; gap: 20px; flex-wrap: wrap; margin-top:20px;
    }
}

</style>

<template>
    <div>
        <Divider ></Divider>
        <div style="text-align: center; margin-top: 20px; margin-bottom:5px; font-size: 24px; font-weight: bold;">
            대영고등학교 비상 예술제 시간표
        </div>
        <div style="text-align:center;  margin-bottom:20px;">
            시간표를 확인하고 관림하세요!
        </div>
        <Divider></Divider>
        <div class="time-table-container">
            <div
                style="width: 620px; border-radius: 10px; margin-left: auto; padding: 20px; background: white; box-shadow: 0 2px 5px rgba(0, 0, 0,0.25), 0 2px 10px rgba(0,0,0,0.22);">
                <div style="font-size: 18px; font-weight: bold;">
                    1부 - 재학생 공연
                </div>
                <Divider></Divider>
                <DataTable :value="timeTable1" showGridlines >
                    <Column field="time" style="width: 140px;">
                        <template #header>
                            <div style="font-size: 17px;  font-weight: bold; color:black;">
                                시간
                            </div>
                            </template>
                    </Column>
                    <Column field="explain" style="">
                        <template #header>
                            <div style="font-size: 17px; font-weight: bold; color:black;">
                                내용
                            </div>
                            </template>
                    </Column>
                </DataTable>

            </div>
            <!--  -->
            <div
                style="width: 620px; border-radius: 10px; margin-right: auto; padding: 20px; background: white; box-shadow: 0 2px 5px rgba(0, 0, 0,0.25), 0 2px 10px rgba(0,0,0,0.22);">
                <div style="font-size: 18px; font-weight: bold;">
                    2부 - 영주시 청소년 공연
                </div>
                <Divider></Divider>
                <DataTable :value="timeTable2" showGridlines >
                    <Column field="time" style="width: 140px;">
                        <template #header>
                            <div style="font-size: 17px; font-weight: bold; color:black;">
                                시간
                            </div>
                            </template>
                    </Column>
                    <Column field="explain" style="">
                        <template #header>
                            <div style="font-size: 17px; font-weight: bold; color:black;">
                                내용
                            </div>
                            </template>
                    </Column>
                </DataTable>

            </div>
        </div>
    </div>

</template>