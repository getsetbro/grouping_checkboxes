var vm = new Vue({
    el:'#app',
    data:{
        p1:false,
        p2:false,
        p3:false,
        p4:false,
        p5:false,
        p6:false,
        p7:false,
        p8:false
    },
    computed:{
        group1:function(){
            if(this.p1 && this.p2 && this.p3){
                return true;
            }
            return false;
        },
        group2:function(){
            if(this.p4 && this.p5 && this.p6){
                return true;
            }
            return false;
        },
        group3:function(){
            if(this.p7 && this.p8){
                return true;
            }
            return false;
        }
    },
    methods:{
        group1click:function(){
            if(this.p1 && this.p2 && this.p3){
                this.p1 = false;
                this.p2 = false;
                this.p3 = false;
            }else{
                this.p1 = true;
                this.p2 = true;
                this.p3 = true;
            }
        },
        group2click:function(){
            if(this.p4 && this.p5 && this.p6){
                this.p4 = false;
                this.p5 = false;
                this.p6 = false;
            }else{
                this.p4 = true;
                this.p5 = true;
                this.p6 = true;
            }            
        },
        group3click:function(){
            if(this.p7 && this.p8){
                this.p7 = false;
                this.p8 = false;
            }else{
                this.p7 = true;
                this.p8 = true;
            }            
        },
    }
});