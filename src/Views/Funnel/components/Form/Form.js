import React from 'react'


/*
    TO-DO

    necesitamos un formulario para:
        nombre
        apellidos
        mail
        fecha de nacimiento con lo 3 campos separados DD,MM,AAAA
        Telefono
        desplegable con 3 compañias vodamovil, moviluna, pomelo
        Checkbox para aceptar términos y condiciones


        Links útiles:
            En el apartado de Form Events (eventos de los inputs)
            https://www.w3schools.com/tags/ref_eventattributes.asp

            React - Forms
            https://reactjs.org/docs/forms.html

*/
class Form extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.props.changeInfo(e.target.id, e.target.value)
    }

    render(){
        const { name, surname, birthdate, phone, company, mail } = this.props.personalInfo.info

        return(
            <div id="Form">
                
                <Input name="name" value={name} onChange={(e)=>this.handleChange(e)} placeholder="nombre" />
                <Input name="surname" value={surname} onChange={(e)=>this.handleChange(e)} placeholder="apellidos" />
                <Input name="phone" value={phone} onChange={(e)=>this.handleChange(e)} placeholder="teléfono" />
                <Input name="mail" value={mail} onChange={(e)=>this.handleChange(e)} placeholder="correo electrónico" />
                
                <BirthDateInput birthdate={birthdate} setBirthdate={(name, value) => this.props.changeInfo(name, value)}/>
                
                <Select value={company} options={['vodamovil', 'moviluna', 'pomelo']} name="company" onChange={(e)=>this.handleChange(e)}/>

                <div 
                    onClick={()=>this.props.onSubmit()}>
                    To ThankYou
                </div>

            </div>
        )
    }
}

export default Form

const Input = ({placeholder, name, value, onChange}) =>
    <label>
        {name}:
        <input
        id={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={e =>onChange(e)}
        />
    </label>


const BirthDateInput = ({birthdate, setBirthdate}) => (
    <div className="inline-inputs birthday">
    <input
      value={birthdate && birthdate.split('/')[0]}
      id="DD"
      type="number"
      max={31}
      placeholder="DD"
      onChange={e =>
        birthdate
          ? setBirthdate(
            'birthdate',
            `${e.target.value}/${birthdate.split('/')[1]}/${birthdate.split('/')[2]}`,
          )
          : setBirthdate('birthdate', `${e.target.value}/00/0000`)
      }
    />
    <input
      value={birthdate && birthdate.split('/')[1]}
      id="MM"
      type="number"
      max={12}
      placeholder="MM"
      onChange={e =>
        birthdate
          ? setBirthdate(
            'birthdate',
            `${birthdate.split('/')[0]}/${e.target.value}/${birthdate.split('/')[2]}`,
          )
          : setBirthdate('birthdate', `00/${e.target.value}/0000`)
      }
    />
    <input
      value={birthdate && birthdate.split('/')[2]}
      id="YYYY"
      type="number"
      max={2999}
      placeholder="YYYY"
      onChange={e =>
       birthdate
          ? setBirthdate(
            'birthdate',
            `${birthdate.split('/')[0]}/${birthdate.split('/')[1]}/${e.target.value}`,
          )
          : setBirthdate('birthdate', `00/00/${e.target.value}`)
      }
    />
  </div>
)

const Select = ({value, options, name, onChange}) => 
    <select
        id={name}
        name={name}
        onChange={e => onChange(e)}
        value={value ? value : '--'}
        >
            <option value="--">--</option>
            {options.map(option => (
            <option key={option} value={option}>
                {option}
            </option>
            ))}
    </select>