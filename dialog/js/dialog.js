/**
 * Created by hantao on 2017/5/8.
 */
class Dialog{
    constructor(config) {
        //初始化，默认配置
        this.type = "info";
        this.text = "hello world!";
        this.title = "dialog";
        this.context = document.body;
        this.style = {
            width : "300px",
            height : "200px",
            left : "400px",
            top : "300px"
        };

        //配置
        this.type = config.type ? config.type : this.type;
        this.text = config.text ? config.text : this.text;
        this.createDialog()
    }
    closeDialog(){
        document.body.removeChild(this.dialog);
    }
    createDialog(){
        //创建对话框
        this.dialog = document.createElement('div');
        this.dialog.className = "dialog dialog-"+this.type;
        this.createTitle();
        this.createConent();
        this.createClose();
        this.setStyle(this.dialog,this.style);
        this.context.appendChild(this.dialog);
    }
    setStyle(element,style){
        for(let i in style){
            element.style[i] = style[i];
        }
    }
    createTitle(){
        const oTitle = document.createElement('h3');
        oTitle.innerText = this.title;
        this.dialog.appendChild(oTitle);
    }
    createConent(){
        const oContent = document.createElement('p');
        oContent.innerText = this.text;
        this.dialog.appendChild(oContent);
    }
    createClose(){
        const oClose = document.createElement('span');
        oClose.innerText = 'x';
        this.setStyle(oClose,{
            position:"absolute",
            top:"5px",
            right:"10px",
            cursor : "pointer"
        });
        this.dialog.appendChild(oClose);
        oClose.addEventListener("click",this.closeDialog.bind(this),false);
    }
}