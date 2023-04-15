var obj = {
    khachHang1:
        [
            ['name', 'id'],
            ['a', '1'],
            ['b', '2']
        ],
    khachHang2: [
        ['a', 'b','ma khach hang','sdt', 'ten khach hang', 'diaChi', 'email']
    ],
    khachHang3: [
        ['Mã khách hàng', 'Tên khách hàng']
    ],
    dienBien: [
        [ 0, 'San pham 0', 'kho1', 4 ],
        [ 1, 'San pham 1', 'kho1', 1 ],
        [ 2, 'San pham 2', 'kho2', 0 ],
        [ 3, 'San pham 3', 'kho1', 0 ],
        [ 4, 'San pham 4', 'kho1', 0 ],
        [ 5, 'San pham 5', 'kho1', 2 ],
        [ 6, 'San pham 6', 'kho2', 6 ],
        [ 7, 'San pham 7', 'kho1', 5 ],
        [ 8, 'San pham 8', 'kho1', 6 ],
        [ 9, 'San pham 9', 'kho1', 5 ]
      ]
}

var tuongUng = {
    khachHang: {
        id: ['ma khach hang', 'Mã khách hàng'],
        name: ['ten khach hang', 'Tên khách hàng']
    }
}

//chiet khau

// Editing donHang version 1.000438.

//lay ra ten cot KhachHang1

var nameColum1 = obj.khachHang1[0]


//lay ra ten cot KhachHang2

var nameColum2 = obj.khachHang2[0]

//lay ra ten cot KhachHang3

var nameColum3 = obj.khachHang3[0]
//tao mang du lieu import

var data = []

//tao hang du lieu

var rowData = []



var test = Object.values(tuongUng.khachHang)


function getIndexTuongUng(nameColum) {
    //tim vi tri cot tuong ung
    var index = []
    nameColum.forEach((itemColum, indexItemColum) => {
        test.forEach((itemTuongUng, indexTuongUng) => {
            if (itemTuongUng.includes(nameColum2[indexItemColum])) {
                index.push(indexItemColum)
            }
        })
    })
    console.log(index);
    return index
}

//day du lieu vao cot tuong ung

var data = []
for(var i = 1; i < obj.khachHang1.length; i++){
    var dataRow = new Array(nameColum2.length)
    var index = getIndexTuongUng(nameColum2)
    index.forEach(( item, p ) => {
        console.log(obj.khachHang1[i][p]);
        dataRow[item] = obj.khachHang1[i][p]
        console.log(dataRow);
    })
    data.push(dataRow)
}
console.log(data);


//create data template
// var baoCao = []
// for(var i = 0; i<10; i++){
//     var row = new Array(obj.dienBien.length)
//     row[0] = i
//     row[1] = 'San pham ' + i
//     row[2] = 'kho1'
//     row[3] = Math.floor(Math.random() * 10);
//     baoCao.push(row)
// }
// console.log(baoCao);
var arrObj = nameColum1.reduce((a, v) => ({ ...a, [v]: v}), {}) 
console.log(arrObj);

const arr = [  [ 'id', 'ten san pham', 'kho', 'soLuong' ],
  [ 1, 'San pham 1', 'kho1', 1 ],
  [ 2, 'San pham 2', 'kho2', 0 ],
  [ 3, 'San pham 3', 'kho1', 0 ],
  [ 4, 'San pham 4', 'kho1', 0 ],
  [ 5, 'San pham 5', 'kho1', 2 ],
  [ 6, 'San pham 6', 'kho2', 6 ],
  [ 7, 'San pham 7', 'kho1', 5 ],
  [ 8, 'San pham 8', 'kho1', 6 ],
  [ 9, 'San pham 9', 'kho1', 5 ]
];

const columns = arr[0]; // Lấy tên các cột từ phần tử đầu tiên của mảng
const data2 = arr.slice(1); // Lấy các phần tử dữ liệu từ mảng bắt đầu từ phần tử thứ 2

const result = data2.map(item => {
  const obj = {}; // Tạo một đối tượng trống để lưu trữ dữ liệu
  
  columns.forEach((column, index) => {
    obj[column] = item[index]; // Gán giá trị của từng cột cho thuộc tính tương ứng của đối tượng
  });
  
  return obj; // Trả về đối tượng chứa dữ liệu của một phần tử trong mảng
});

console.log(result);


fetch("https://provinces.open-api.vn/api/?depth=3")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

