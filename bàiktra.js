//bài 1
const data = [
    {
        price: 200,
        name: 'Bản ủi',
        address: 'Tôn Thất Tùng, TPHCM'
    },
    {
        price: 3000,
        name: 'Máy giặt',
        address: 'Hai Bà Trưng, Quận Phú Nhuận, TPHCM'
    },
    {
        price: 600,
        name: 'Bàn làm việc',
        address: 'Nam Kỳ Khởi Nghĩa, Quận 3, TPHCM'
    },
    {
        price: 1000,
        name: 'Ghế làm việc',
        address: 'Đống đa, Quận 3, Hà Nội'
    },
    {
        price: 25000,
        name: 'Máy tính',
        address: 'Cái bè, Huyện Cái bè, TPHCM'
    },
    {
        price: 9000,
        name: 'Màn hình tivi',
        address: 'Châu Đốc, Kiên Giang'
    },
    {
        price: 30000,
        name: 'Iphone 13',
        address: 'American'
    },
    {
        price: 28000,
        name: 'Samsum s22',
        address: 'Korea'
    },]

    function sanpham(price, name, address){
        console.log('Sản phẩm:' + name + ',' + 'Giá:'+ price+ ',' +'Địa chỉ mua hàng:'+address)
    }
    data.map(function (item){
        console.log(item.name, item.price, item.address)
    })
    //Bài 2
    const newData = data.filter(
        function giaTien(item){
            if(item.price>25000) return true;
            return false
        }
    )
    //Bài 3
    const minPrice = data.filter(
        function giaTienNhoNhat(item){
            var result= 'Sản phẩm có giá tiền nhỏ nhất là'+ price+'là'+name +'Địa chỉ mua hàng:'+address
            if(item.price==200) 
            return result;
        }
    )
    //Bài 4
    const maxPrice = data.filter(
        function giaTienLonNhat(item){
            var result= 'Sản phẩm có giá tiền lớn nhất là'+ price+'là'+name +'Địa chỉ mua hàng:'+address
            if(item.price==3000) 
            return result;
        }
    )
