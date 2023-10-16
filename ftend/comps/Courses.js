import '../csscomps/Course.css'
let Courses=()=>{
    let course=["Python","JavaScript","Java","ReactJS","HTML","CSS",
    "NodeJS","ExpressJS","MySQL","MongoDB","Data Structures","Frontend",
    "Backend","MERN Stack Developer"]
    let courseimg=["https://www.google.com/url?sa=i&url=https%3A%2F%2Flogos-world.net%2Fpython-logo%2F&psig=AOvVaw1dntsBx4TitZaH-L8fkSjI&ust=1697520604525000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPCMm6Xr-YEDFQAAAAAdAAAAABAE",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AJavascript_badge.svg&psig=AOvVaw1x_2iyIsayElbCW_TTSjmO&ust=1697520669353000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKiWvbfr-YEDFQAAAAAdAAAAABAE",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Flogos-world.net%2Fjava-logo%2F&psig=AOvVaw15cSz9HhrU_L3IwR8pJLB4&ust=1697520741152000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNjx2tnr-YEDFQAAAAAdAAAAABAE",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreebiesupply.com%2Flogos%2Freact-logo-2%2F&psig=AOvVaw22RzBHgoWOF80dwd6Tif2j&ust=1697520774339000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNjjhenr-YEDFQAAAAAdAAAAABAI",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fillustrations%2Flogo-html-html5-icon-2582748%2F&psig=AOvVaw14I1CrNDuDbZHFyxwYAWpT&ust=1697520809261000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCND95vnr-YEDFQAAAAAdAAAAABAE",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fillustrations%2Flogo-css-css3-icon-2582747%2F&psig=AOvVaw2obOOTXeKjNZCnHHp-NAW4&ust=1697520830665000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMChoITs-YEDFQAAAAAdAAAAABAJ",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fseeklogo.com%2Fvector-logo%2F373130%2Fnodejs&psig=AOvVaw1gklbeQBXeDCQtjx_nG9LF&ust=1697522158101000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPDsuv7w-YEDFQAAAAAdAAAAABAE",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adwaretech.com%2Fdevelopers%2Fhire-expressjs-developers&psig=AOvVaw0sJ1Uj4pbO_jNFV2h_wRz6&ust=1697522200482000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOjy7JLx-YEDFQAAAAAdAAAAABAJ",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngimg.com%2Fimage%2F60291&psig=AOvVaw1Vf2bisQQiNPjMzMplwF6j&ust=1697522278746000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLC0h7jx-YEDFQAAAAAdAAAAABAE",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dmongodb&psig=AOvVaw2Brmf9j28CWO62dXvamjZw&ust=1697522306063000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjGgcXx-YEDFQAAAAAdAAAAABAE",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-dirtn&psig=AOvVaw0xyqCNy0BdCEIPqu-1Sbem&ust=1697522335141000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNjt59Hx-YEDFQAAAAAdAAAAABAE"]


return(
    <div className="mainclass">

       <div className="class0">
       {
            course.map((item,index)=>{
                
                return(
            <div className="class1">
                    <div className="class11">
                    <h3>{item}</h3>
                    </div>
                    <div className="class12">
                    {
                        (index<=9)?(<img src={courseimg[index]} alt="courseimg"/>):null
                    }
                    </div>

            </div>
                )
            })
        }
       </div>
        <div className="class2">

        </div>
    </div>
)

}
export default Courses;