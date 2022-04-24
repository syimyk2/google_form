import React from 'react'
import styled from 'styled-components'
import { MdDateRange } from 'react-icons/md'
import { IoMdTime } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import useInput from '../../../../hooks/useInput'
import { formActions } from '../../../../store/formSlice'
import { Variant } from './AnswerItem'
import VariantAdder from './VariantAdder'
import {
   DATE,
   EMAIL,
   NAME,
   NUMBER,
   ONEOFLIST,
   SOMEOFLIST,
   TEXT,
   TIME,
} from '../../../../utils/constants/general'

const QuizeAnswers = ({
   quizeFormId,
   quizeFormAnswerItems,
   typeOfQuestion,
}) => {
   const dispatch = useDispatch()

   const { changeInputHandler: variantChange, enteredValue: variantValue } =
      useInput()

   const addVariantItemHandler = (formId) => {
      const quizeVariants = {
         id: Date.now().toString(),
         variantValue: '',
         isVariantCorrect: false,
      }

      dispatch(formActions.addVariants({ quizeVariants, formId }))
   }

   const deleteVariantItemHandler = (formId, itemId) => {
      dispatch(formActions.deleteVariants({ formId, itemId }))
   }
   const saveVariantValueHandler = (formId, itemId) => {
      dispatch(formActions.saveVariantsValue({ formId, itemId, variantValue }))
   }
   const selctAsAcorrectVariantHandler = (formId, itemId) => {
      dispatch(formActions.selectVariantAsAcorrect({ formId, itemId }))
   }

   // ----------------Change answer form ---------------------
   let changebleForm

   switch (typeOfQuestion.title) {
      case TEXT:
         changebleForm = (
            <AnswerWithText>
               <span>Текстовый ответ</span>
            </AnswerWithText>
         )
         break
      case NUMBER:
         changebleForm = (
            <AnswerWithDate>
               <span>{typeOfQuestion.title}</span>
               <img src={typeOfQuestion.icon} alt={typeOfQuestion.title} />
            </AnswerWithDate>
         )
         break
      case EMAIL:
         changebleForm = (
            <AnswerWithDate>
               <span>{typeOfQuestion.title}</span>
               <img src={typeOfQuestion.icon} alt={typeOfQuestion.title} />
            </AnswerWithDate>
         )
         break
      case TIME:
         changebleForm = (
            <AnswerWithDate>
               <span>{typeOfQuestion.title}</span> <IoMdTime fontSize={20} />
            </AnswerWithDate>
         )
         break
      case NAME:
         changebleForm = (
            <AnswerWithDate>
               <span>{typeOfQuestion.title}</span>
               <img src={typeOfQuestion.icon} alt={typeOfQuestion.title} />
            </AnswerWithDate>
         )
         break
      case DATE:
         changebleForm = (
            <AnswerWithDate>
               <span>День, месяц, год</span>
               <MdDateRange fontSize="20px" color="grey" />
            </AnswerWithDate>
         )
         break
      case SOMEOFLIST:
         changebleForm = (
            <>
               {quizeFormAnswerItems.map((quizeFormAnswerItem) => (
                  <Variant
                     type="checkbox"
                     placeholder={quizeFormAnswerItem.count}
                     key={quizeFormAnswerItem.id}
                     id={quizeFormAnswerItem.id}
                     formId={quizeFormId}
                     onChange={variantChange}
                     value={variantValue}
                     defaultValue={quizeFormAnswerItem.variantValue}
                     onBlur={saveVariantValueHandler}
                     onDelete={deleteVariantItemHandler}
                     onChecked={selctAsAcorrectVariantHandler}
                     checked={quizeFormAnswerItem.isVariantCorrect}
                  />
               ))}

               <VariantAdder
                  type="checkbox"
                  onClick={addVariantItemHandler}
                  id={quizeFormId}
               />
            </>
         )
         break
      case ONEOFLIST:
         changebleForm = (
            <>
               {quizeFormAnswerItems.map((quizeFormAnswerItem) => (
                  <Variant
                     key={quizeFormAnswerItem.id}
                     id={quizeFormAnswerItem.id}
                     placeholder={quizeFormAnswerItem.count}
                     formId={quizeFormId}
                     onChange={variantChange}
                     defaultValue={quizeFormAnswerItem.variantValue}
                     value={variantValue}
                     onBlur={saveVariantValueHandler}
                     onDelete={deleteVariantItemHandler}
                     type="radio"
                     onChecked={selctAsAcorrectVariantHandler}
                     checked={quizeFormAnswerItem.isVariantCorrect}
                  />
               ))}
               <VariantAdder
                  onClick={addVariantItemHandler}
                  type="radio"
                  id={quizeFormId}
               />
            </>
         )
         break
      default:
         ;<p>Не найдено</p>
         break
   }

   return <QuzeAnswersContainer>{changebleForm}</QuzeAnswersContainer>
}

export default QuizeAnswers

const QuzeAnswersContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 780px;
   padding: 15px;
   margin: 0 auto;
`
const AnswerWithDate = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-size: 14px;
   height: 40px;
   width: 220px;
   border-bottom-style: ridge;
   img {
      width: 25px;
   }
`
const AnswerWithText = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-size: 14px;
   height: 40px;
   width: 700px;
   border-bottom: 1px dashed grey;
   color: grey;
`
