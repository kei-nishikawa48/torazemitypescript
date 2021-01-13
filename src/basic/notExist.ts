export default function notExistSample() {
  let name = null
  name = 'kei'
  console.log('notExist sample 1:', typeof name, name)
  if (!name) {
    console.log('notExist sample 2:', '吾輩は猫である', '名前は' + name)
  } else {
    console.log('notExist sample 3:', '吾輩は猫である', '名前は' + name)
  }
  let age = undefined
  age = 24
  console.log('notExist sample 4:', typeof age, age)
  if (!age) {
    console.log('notExist sample 4:', '年齢は秘密です')
  } else {
    console.log('notExist sample 4:', '年齢は' + age + 'です')
  }
}
