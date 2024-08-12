const today =new Date();

const formatDate =() => {
  let year = today.getFullYear();
  let month = today.getMonth() +1;
  let day =today.getDate();

  console.log(year + '年'+ month + '月' + day + '日');
}

formatDate();


