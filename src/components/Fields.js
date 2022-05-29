const Fields = (props) => {
  const { fields } = props;

  return (
      <>
          {fields.map((field) => {
              return (
                  <div key={field.id}>
                      <input id={field.id} type="radio" name="field" />
                      <label>
                          {field.label}: 
                          {field.text}
                      </label>
                  </div>
              )
          })}
      </>
  )
}

export default Fields;