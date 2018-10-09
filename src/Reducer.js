export default (state, action) => {
  console.log(state)
  console.log(action)
  switch(action.type) {
    case 'TEST':
    let aaa = null;
    setTimeout(function () {
      aaa = Object.assign({}, state, {
        name: action.text
      })
    }, 2000)
    return aaa
    default:
  }
}