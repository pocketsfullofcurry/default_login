import React from 'react'

export default class DayBtn extends React.Component{
  constructor(props){
    super(props);
  }
renderMonth() {
  if(this.props.hour.length > 2) {
    let btnArray = this.props.hour.split(" ");
      return <button className={this.props.coco}>{btnArray[0]}<br/>{btnArray[1]}</button>
  } else {
      return <button className={this.props.coco}>{this.props.hour}</button>
  }
}
render(){
  return (
    this.renderMonth()
  )
}

}
