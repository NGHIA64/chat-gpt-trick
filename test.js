var obj = {
    khachHang1:
    [
        ['id', 'name'],
        ['1', 'a'],
        ['2','b']
    ] ,
    khachHang2: [
        ['ma khach hang', 'ten khach hang', 'diaChi', 'email']
    ]
}

var tuongUng = {
    khachHang : {
        id: ['ma khach hang'],
        name: ['ten khach hang']
    }
}

//lay ra ten cot KhachHang1

var nameColum1 = obj.khachHang1[1]

//lay ra ten cot KhachHang2

var nameColum2 = obj.khachHang2[1]

//tao mang du lieu import

var data = []

//tao hang du lieu

var rowData = []

//tim vi tri cot tuong ung

var index = []

nameColum2.forEach( (item, index) => {
    
})

tuongUng.khachHang.forEach(
    item => {
        console.log(item);
    }
)