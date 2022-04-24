import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { ReactComponent as PlusGoogle } from '../../../../../assets/icons/plus.svg'
import { formActions } from '../../../../../store/formSlice'
import { ANSWER_SETTINGS } from '../select/SelectModal'

const StyledToolBar = styled.div`
   display: flex;
   position: fixed;
   z-index: 5;
   left: 1150px;
   top: 400px;
   justify-content: center;
   align-items: center;
   width: 95px;
   height: 95px;
   border-radius: 50%;
   background-color: white;
   box-shadow: 0px 5px 10px 6px rgba(34, 60, 80, 0.2);
   & svg {
      font-size: 100px;
      cursor: pointer;
      background: transparent;
      :hover {
         width: 90px;
         height: 90px;
      }
   }
   & :hover {
      width: 60px;
      height: 60px;
   }
`

export const ToolBar = () => {
   const dispatch = useDispatch()
   const addNewQuestionForm = () => {
      const quizeForm = {
         id: Date.now().toString(),
         isQuestionImportant: false,
         typeOfQuestion: ANSWER_SETTINGS[0],
      }
      dispatch(formActions.addQuizForm(quizeForm))
   }
   return (
      <StyledToolBar>
         <PlusGoogle onClick={addNewQuestionForm} />
      </StyledToolBar>
   )
}
