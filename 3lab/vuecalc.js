let vue = new Vue (
    {
    el: '#calc',
    data:{
        result: '',
        symbols: ['1', '2', '3', '+', '4', '5', '6', '-', '7' ,'8', '9', '/', '0', '.', '*'],
    },
    methods:
    {
        input: function(char)
        {s
            this.result += char;
        },
        calc: function()
        {
            try
            {
                this.result = eval(this.result);
                
                if (isNaN(this.result)) 
                {
                    throw new Error();
                  }
            }
            catch{
                alert("invalid input")
                this.result = '';
            }
        },
        del: function()
        {
            this.result = '';
        }
    }
})