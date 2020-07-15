import styled from '@emotion/styled'

function BarSlot ({ projects, index }){

    return (
        <BarSlotStyled>
            <div className="rectangle">
                {index!==false && (<span className="title1">{projects[index].title}</span>)}
                {/* {index!==false && (<span className="blurb1">{projects[index].blurb}</span>)} */}
            </div>
            
        </BarSlotStyled>
    )
}

const BarSlotStyled = styled.div`

.blurb1{
    position: absolute;
    font-family: 'HelveticaNeue-Thin';
    font-size: 1.5rem;
    display: inline-block;
    padding-left: 40px;
    padding-top: 5px;
    width: 1000px;
    /* text-align: right; */
}

.rectangle {
  position: absolute;
  display: inline-block;
  min-width: 120px;
  height: 70px;
  border-width: 1px;
  margin-left: -8.3vw;
  /* margin-bottom: 40px; */
  /* padding: 20px */
  padding-left: 20px;
  padding-top: 15px;
  padding-right: 20px;
  /* transition: all 2s ease-in-out; */
  
}

.title1 {
  font-family: 'HelveticaNeue-Thin';
  font-size: 2rem;
  animation: title-fade-in 2s ease-in-out;
  /* animation-delay: 1s; */
}

@keyframes title-fade-in {
0% {
    opacity: 0.0;
}
100% {
    opacity: 1.0;
}
}

@media screen and (min-width: 1025px) {
.title1 {
    margin-left: 6.8vw;
}
}

@media screen and (max-width: 1024px) {
.title1 {
    margin-left: 3.2vw;
}
}

`

export default BarSlot