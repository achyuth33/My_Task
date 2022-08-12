import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const CreateTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #131213;
  min-height: 100vh;
  max-height: 500vh;
  width: 40%;
  padding: 20px;
  padding-bottom: 732px;
`

export const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
`

export const FormHeading = styled.h1`
  text-align: center;
  color: #f3aa4e;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
`

export const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
`

export const Label = styled.label`
  color: #f8f8f8;
  font-family: 'Roboto';
  font-size: 18px;
  margin-bottom: 10px;
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  color: #000000;
  font-family: 'Roboto';
  font-size: 16px;
  padding-left: 15px;
  outline: none;
  margin-bottom: 25px;
`

export const SelectInput = styled.select`
  height: 40px;
  width: 100%;
  color: #000000;
  font-family: 'Roboto';
  font-size: 16px;
  padding-left: 15px;
  outline: none;
  margin-bottom: 25px;
`

export const OptionInput = styled.option`
  color: #000000;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
`

export const Button = styled.button`
  background-color: #f3aa4e;
  color: #f1f5f9;
  height: 40px;
  width: 120px;
  margin-top: 20px;
  align-items: center;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const AddTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #000000;
  min-height: 100vh;
  width: 60%;
  padding: 20px;
`

export const TagsHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
`

export const TagsListUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`

export const TagsList = styled.li`
  display: flex;
  margin: 7px;
`

export const TagsButton = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f1f5f9;
  border-radius: 10px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
`

export const TaskListUl = styled.ul`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  padding: 0px;
`

export const TaskListLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #1a171d;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
`

export const TaskText = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 700;
`

export const TaskTag = styled.p`
  background-color: #f3aa4e;
  color: #323f4b;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 10px;
  border: none;
`

export const NoTaskText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  align-self: center;
  text-align: center;
  margin-top: 150px;
`
