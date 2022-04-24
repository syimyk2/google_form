import styled from 'styled-components'
import {
   AiOutlinePlusCircle,
   AiOutlineImport,
   AiOutlineVideoCameraAdd,
} from 'react-icons/ai'
import { BiText } from 'react-icons/bi'
import { BsCardImage } from 'react-icons/bs'
import { GrChapterAdd } from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { formActions } from '../../../../../store/formSlice'
import { ANSWER_SETTINGS } from '../select/SelectModal'

const StyledToolBar = styled.div`
   display: flex;
   position: fixed;
   z-index: 5;
   left: 1100px;
   top: 120px;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   width: 50px;
   height: 250px;
   border-radius: 10px;
   background-color: white;
   svg {
      width: 50px;
      color: #4d4949;
      font-size: 22px;
      cursor: pointer;
   }
   svg:hover {
      background-color: #80808038;
      color: #32024d;
   }
`

export const ToolBar = () => {
   const dispatch = useDispatch()
   const addNewQuestionForm = () => {
      const quizeForm = {
         id: Math.random().toString(),
         isQuestionImportant: false,
         typeOfQuestion: ANSWER_SETTINGS[0],
      }
      dispatch(formActions.addQuizForm(quizeForm))
   }
   return (
      <StyledToolBar>
         <AiOutlinePlusCircle onClick={addNewQuestionForm} />
         <AiOutlineImport />
         <BiText />
         <BsCardImage />
         <AiOutlineVideoCameraAdd />
         <GrChapterAdd />
      </StyledToolBar>
   )
}
