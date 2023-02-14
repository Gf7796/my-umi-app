import { Component } from "react"
import { Button, Input } from 'antd';


class ClassDemo extends Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            name: "张三"
        }
    }

    inputDom = () => {

        const inputChangeFn = (value: any) => {
            this.setState({
                name: value.target.value
            })
        }


        return (
            <Input onChange={inputChangeFn}/>
        )
    }

    render() {
        const { name } = this.state
        return (
            <div>
                {this.inputDom()}
                <p>{name}</p>
            </div>
        )
    }
}

export default ClassDemo