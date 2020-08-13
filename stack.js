class stack{
        constructor(){
            this.item = [];
            this.count=0;
        }
        push(val){
            this.item[this.count]=val;
            this.count++;
        }
        pop(){
            this.count--;
            this.item.pop();
        }
        size(){
            return this.count+1;
        }

        isempty(){
            return this.count == 0;
        }
        print(){
           return this.item;
        }
}
var stack1 = new stack();
stack1.push(1);
stack1.pop();
console.log(stack1.print());



