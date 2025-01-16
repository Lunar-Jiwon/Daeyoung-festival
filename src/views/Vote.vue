<template>
    <div style="text-align: center; margin-top:20px;">
        {{ name }}에게 투표하였습니다
    </div>
</template>

<script setup>

import axios from 'axios';
import { inject, onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const name = ref("")
const $cookies = inject('$cookies');

function isPrivateMode( callback ){
    let fileSys = window.RequestFileSystem || window.webkitRequestFileSystem;

    if ( !fileSys ){
        callback( false );
    } else {
        fileSys(window.TEMPORARY,
            100,
            callback.bind( undefined, false ),
            callback.bind( undefined, true )
        );
    }
}

onBeforeMount(async ()=>{
    isPrivateMode(async (t)=>{
        if(t){
            alert("개인정보 보호 모드 혹은 시크릿 모드 종료 후 다시 시도해주세요")
            location.replace("about:blank")
        }else{
            if(route.query == {}) {
        alert("올바르지 않은 접근입니다")
        location.replace("about:blank")
    }else{
        // console.log(route.query)
        const isVote = $cookies.get(`${route.query.round}r`)
        if(isVote){
            alert(`이미 투표하였습니다`)
            location.replace("about:blank")
        }else{
            $cookies.set(`${route.query.round}r`,true)
            name.value = route.query.target
            await axios.post(`/user/vote`,{
                target:route.query.target
            })
            alert(`${route.query.target}에게 투표하였습니다!`)
        }
    }
        }
    })
})

</script>