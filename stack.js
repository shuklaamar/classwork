class stack{
        constructor(){
            this.stack_array = [];
        }
        push(val){
            this.stack_array.push(val);
        }
        pop(){
            if(this.stack_array.length == 0 ) return 'cant pop';
            else{
                return stack_array.pop();
            }
        }
        size(){
            return this.stack_array.length;
        }

        isempty(){
            return this.stack_array.length == 0;
        }
        print(){
            for(let i=this.stack_array.length-1;i>0;i--){
                return this.stack_array[i];
            }
        }
}
var stack1 = new stack();
stack1.push(1);
console.log(stack1.print);


