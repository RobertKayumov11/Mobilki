<template>
    <Page  class="app">
     <ActionBar title="Calculator Abbazov"/>
         <GridLayout class="keyboard" columns="*, *, *, *" rows="*, *, *, *, *, *">
            <Label textWrap="true" class="result" v-model="result" row="0" col="0" colSpan="4"/>/>
            <Button  class="btn act" text="C" @tap="del()" row="1" col="0" colSpan="3"/>
            <Button  class="btn act" text="/" @tap="input('/')" row="1" col="3"/>
            <Button  class="btn" text="7" @tap="input('7')" row="2" col="0"/>
            <Button  class="btn" text="8" @tap="input('8')" row="2" col="1"/>
            <Button  class="btn" text="9" @tap="input('9')" row="2" col="2"/>
            <Button  class="btn act" text="*" @tap="input('*')" row="2" col="3"/>
            <Button  class="btn" text="4" @tap="input('4')" row="3" col="0"/>
            <Button  class="btn" text="5" @tap="input('5')" row="3" col="1"/>
            <Button  class="btn" text="6" @tap="input('6')" row="3" col="2"/>
            <Button  class="btn act" text="-" @tap="input('-')" row="3" col="3"/>
            <Button  class="btn" text="1" @tap="input('1')" row="4" col="0"/>
            <Button  class="btn" text="2" @tap="input('2')" row="4" col="1"/>
            <Button  class="btn" text="3" @tap="input('3')" row="4" col="2"/>
            <Button  class="btn act" text="+" @tap="input('+')" row="4" col="3"/>
            <Button  class="btn" text="0" @tap="input('0')" row="5" col="0"/>
            <Button  class="btn" text="." @tap="input('.')" row="5" col="1"/>
            <Button  class="btn act" text="=" @tap="calc()" row="5" col="2" colSpan="2"/>
         </GridLayout>
    </Page>
</template>

<script >
   export default  {
    data() {
        return {
            result: '',
      }
    },
    methods:{
            input: function(char){
                this.result = this.result.toString();
                this.result += char;
            },
            calc: function(){
                try{
                    this.result = eval(this.result);
                    if (isNaN(this.result)) {
                        throw new Error();
                  }
                }
                catch{
                    this.result = 'invalid input';
                }
            },
            del: function(){
                this.result = '';
            }
    }
  }
</script>

<style scoped>
    .app{
    background-color: #333333;
    }
    .result{
        text-align: right;
        font-size: 28px;
        overflow-wrap: break-word;
        color: #ffffff;

    }
    .btn{
        background-color: #808080;
        border-radius: 40%;
        color: #ffffff;

    }
    .btn:active {
         background-color: #696969;
    }
    .act {
        background-color: #FF8C00;
    }
     .act:active {
            background-color: #FF4500;
        }
</style>