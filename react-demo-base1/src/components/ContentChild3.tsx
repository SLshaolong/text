import ContentText from "./ContentText";


export default function ContentChild3(){
    
    return <div>
        <ContentText.Consumer>
            {value=> <div>
                姓名 {value.user}
            </div> }
        </ContentText.Consumer>
    </div>
}