const khaiViMon1 = "https://res.cloudinary.com/dpi2hw1lm/image/upload/v1678076176/shop/mon1_abhwgv.webp"
const khaiViMon2 = "https://res.cloudinary.com/dpi2hw1lm/image/upload/v1678076176/shop/mon2_tokcxz.webp"
const khaiViMon3 = "https://res.cloudinary.com/dpi2hw1lm/image/upload/v1678076176/shop/mon3_revyqc.webp"

const monChinhMon1 = "https://res.cloudinary.com/dpi2hw1lm/image/upload/v1678076206/shop/mon1_ux7fqe.webp"
const monChinhMon2 = "https://res.cloudinary.com/dpi2hw1lm/image/upload/v1678076206/shop/mon2_ceqakc.webp"
const monChinhMon3 = "https://res.cloudinary.com/dpi2hw1lm/image/upload/v1678076206/shop/mon3_vv7as9.jpg"


const monNuocMon1 = "https://res.cloudinary.com/dpi2hw1lm/image/upload/v1678076234/shop/mon1_gb7c7m.webp"
const monNuocMon2 = "https://res.cloudinary.com/dpi2hw1lm/image/upload/v1678076234/shop/mon2_z8mgfi.webp"

const trangMiengMon1 = "https://res.cloudinary.com/dpi2hw1lm/image/upload/v1678076251/shop/mon1_tif7ng.webp"

const doUongMon1 = "https://res.cloudinary.com/dpi2hw1lm/image/upload/v1678076140/shop/mon1_qkplmm.webp"
const doUongMon2 = "https://res.cloudinary.com/dpi2hw1lm/image/upload/v1678076140/shop/mon2_g8omho.webp"
const doUongMon3 = "https://res.cloudinary.com/dpi2hw1lm/image/upload/v1678076140/shop/mon3_cuzuk1.webp"

const comMon1 = "https://res.cloudinary.com/dpi2hw1lm/image/upload/v1678015763/shop/mon1_l5ax2r.webp"
const comMon2 = "https://res.cloudinary.com/dpi2hw1lm/image/upload/v1678015763/shop/mon2_x3bbyv.webp"
const comMon3 = "https://res.cloudinary.com/dpi2hw1lm/image/upload/v1678015764/shop/mon3_qsvuex.webp"

const foodObject = [
    {
        id:1,
        name: 'Trà sữa Oolong',
        price: 45,
        describe: 'Trà sữa Oolong là sự hòa quyện của tinh túy giữa trà oolong vùng Bảo Lộc trứ danh và bột sữa thơm béo. Với tỷ lệ trà, sữa và đường phù hợp, mỗi ly trà sữa oolong có vị ngọt thanh dịu nhẹ, dễ dàng làm xiêu lòng mọi tín đồ trà sữa. Chúng tôi hy vọng, mỗi ly trà sữa oloong sẽ giúp quý khách tận hưởng vị ngon lan tỏa đến từng giác quan và tiếp thêm năng lượng cho ngày tươi mới.',
        ingredient: 'Trà oolong Bảo Lộc, bột sữa tách béo ',
        timeFinish: '<3',
        ration: '1',
        image: doUongMon1,
        type:'douong',
        discount:3,
        slug:'/mon-an/tra-sua-oolong'
    },
    {
        id:2,
        name: 'Trà tái nhãn',
        price: 48,
        describe: 'Trà lài luôn là khởi đầu dễ chịu để sáng tạo nên những thức uống thanh nhiệt thú vị. Khi kết hợp cùng long nhãn, trà lài được cân bằng độ chát nhẹ bằng vị ngọt dịu thanh nhã, tạo nên một thức uống giải nhiệt, an thần hiệu quả.',
        ingredient: 'Trà xanh hoa lài Đài Loan, syrup nhãn, trái nhãn',
        timeFinish: '<3',
        ration: '1',
        image: doUongMon2,
        type:'douong',
        discount:0,
        slug:'/mon-an/tra-tai-nhan'
    },
    {
        id:3,
        name: 'Dương chi cam lộ',
        price: 55,
        describe: 'Nước cam ép pha với sữa ngọt thanh tạo cảm giác thoải mái.',
        ingredient: 'Cam Mỹ tho và sữa bà thọ',
        timeFinish: '<3',
        ration: '1',
        image: doUongMon3,
        type:'douong',
        discount:9,
        slug:'/mon-an/duong-chi-cam-lo'
    },
    {
        id:4,
        name: 'Bánh chuối hấp',
        price: 48,
        describe: 'Bánh chuối hấp là một món ăn vặt dân dã của nền ẩm thực Việt. Các đầu bếp của TASTY đã khéo léo kết hợp vị ngọt ngào của những quả chuối sứ chín thơm lừng cùng nước cốt dừa béo ngậy, nhấn nhá một chút hương rượu vodka để gia tăng sự độc đáo trong hương vị từng miếng bánh. Là sự giao thoa tinh tế giữa ẩm thực truyền thống và hơi thở hiện đại, từng miếng bánh chuối dẻo dai được phủ một lớp nước cốt dừa thơm béo, tuy giản dị song lại có sức hấp dẫn lạ lùng với các thực khách gần xa.',
        ingredient: 'Bánh chuối: Chuối sứ chín, đường vàng, muối Thái, hương va-ni, rượu vodka, tinh dầu chuối, bột năng, dầu hạt cải, bột nếp, màu vàng thực phẩm. Nước cốt dừa: nước cốt dừa, sữa đặc, đường cát, bột năng, muối Thái, lá dứa. Trang trí: đậu phộng, mè trắng, lá chuối',
        timeFinish: '6',
        ration: '1 - 2',
        image: trangMiengMon1,
        discount:0,
        slug: '/mon-an/banh-chuoi-hap',
        type:'trangmieng'
    },
    {
        id:5,
        name: 'Canh mướp hương nhồi thịt',
        price: 20,
        describe: 'Canh mướp hương nhồi thịt được xử lý đầy tinh tế mang đến vị ngọt thanh và hương thơm thoang thoảng kích thích vị giác. Mướp hương vốn là loại quả quen thuộc được nhiều người ưa thích có vị ngọt, tính mát cùng nhiều dưỡng chất tốt cho sức khỏe. Đặc biệt kết hợp với phần nhân làm từ tôm bạc thẻ, thịt heo xay, giò sống heo giúp tăng thêm vị đậm đà, sự dai giòn ấn tượng. Đi cùng vị ngọt thuần chất của các loại củ như su hào, bắp mỹ trái, hành baro, củ sắn...chắc chắn sẽ mang đến trải nghiệm khó quên.',
        ingredient: 'Tôm bạc thẻ, giò sống, cá thát lát, ba chỉ heo xay, mướp hương, ngò rí, hành lá, tỏi củ, hành tím, ớt sừng, bắp mỹ, củ su hào, củ sắn nước, xương gà, đậu hũ non',
        timeFinish: '10',
        ration: '1',
        image: monNuocMon1,
        type:'monnuoc',
        discount:0,
        slug:'/mon-an/canh-muop-huong-nhoi-thit'
    },
    {
        id:6,

        name: 'Bún bò',
        price: 65,
        describe: 'Bún bò món ăn truyền thống, niềm tự hào của ẩm thực vùng đất kinh kỳ nay đã có trong thực đơn với phiên bản đầy mới mẻ đủ khiến mọi thực khách phải xuýt xoa. Để chế biến món bún bò đặc biệt  cần trải qua nhiều công đoạn nhưng quan trọng nhất vẫn là nước lèo - “linh hồn” của món vì cần ninh xương trong hàng giờ liền kết hợp các gia vị và nguyên liệu đặc trưng từ sả tươi, sa tế, ớt sừng, hành tím...đến tôm khô tạo nên màu sắc bắt mắt, dậy mùi thơm phức cùng hương vị đậm đà. Đặc biệt, món ăn còn hấp dẫn bởi phần gầu bò hầm kỹ, chả cua ngọt thịt. Khi thưởng thức, thực khách vắt thêm miếng chanh, thả chút ớt và các loại rau sống tươi ngon chắc chắn sẽ mang đến trải nghiệm khó quên.',
        ingredient: 'Topping: Chả cua, gầu bò, ngò gai, rau răm, hành lá, hành tây. Ăn kèm: Bún tươi, rau muống bào, bắp chuối bào, giá sống, ngò gai, chanh không hạt, ớt Batri, Sa tế khô, rau quế, húng quế. Nước lèo: Xương ống bò, xương bánh chè heo, tôm khô, tỏi, hành tím, hành tây, ớt sừng, sả cây, sa tế, dầu ăn, đường phèn, đường cát, bột ngọt, nước mắm',
        timeFinish: '10',
        ration: '1',
        image: monNuocMon2,
        type:'monnuoc',
        discount:0,
        slug:'/mon-an/bun-bo'
    },
    {
        id:7,

        name: 'Sụn gà xóc muối Tây Ninh',
        price: 35,
        describe: 'Món sụn gà xóc muối Tây Ninh là một món ăn vặt hoàn hảo với độ giòn từ lớp bột bên ngoài và độ dai dai từ sụn gà bên trong. Các đầu bếp đã sáng tạo khéo léo khi kết hợp muối ớt Tây Ninh và các gia vị hấp dẫn giúp tạo nên một món ăn mới lạ với mùi thơm cùng hương vị đậm đà. Món ăn được gói gọn trong một chiếc tổ chim làm bằng sả chiên, không chỉ đẹp mắt mà thực khách có thể thưởng thức độ giòn thơm, vị vừa ăn.',
        ingredient: 'Sụn gà, muối Tây Ninh, trứng gà, sả, nghệ, lá chanh, ớt sừng, hành phi, tỏi phi, tôm khô, chà bông heo, bột chiên xù',
        timeFinish: '10',
        ration: '1',
        image: monChinhMon1,
        type:'monchinh',
        discount:0,
        slug:'/mon-an/sun-ga-xoc-muoi-tay-ninh'
    },
    {
        id:8,
        name: 'Cơm chiên thịt cua lá cẩm',
        price: 89,
        describe: 'Cơm chiên thịt cua lá cẩm là món ăn đạt điểm tuyệt đối từ hình thức đến hương vị. Sử dụng nguyên liệu gạo Basmati Malika giàu dinh dưỡng được nhập khẩu từ Ấn Độ giúp hạt cơm luôn tơi xốp, không bị dính. Kết hợp cùng lá cẩm, một loại thảo dược tốt cho sức khỏe và tạo nên màu tím bắt mắt điểm xuyến với màu trắng từ thịt cua tươi ngon và màu vàng hấp dẫn của bắp mỹ. Món ăn gói cầu kỳ bên trong lớp trứng mỏng giúp lưu giữ độ nóng và vị đậm đà tuyệt hảo.',
        ingredient: 'Gạo Basmati, trứng gà (vỏ trứng cuộn), thịt cua, thanh cua, trứng cá chuồn, giá sống, hành lá, gừng, bắp mỹ, lá cẩm, hạt nêm heo, muối, đường cát, dầu ăn, bột mì, trứng gà, ớt chuông đỏ, ớt sừng xanh, ngò rí. Nước tương pha tỏi, ớt: nước tương Nam Dương, tỏi bằm,ớt sừng bằm',
        timeFinish: '10',
        ration: '1',
        image: monChinhMon2,
        type:'monchinh',
        discount:0,
        slug:'/mon-an/com-chien-thit-cua-la-cam'
    },
    {
        id:9,
        name: 'Cơm chiên hải sản',
        price: 89,
        describe: 'Cơm chiên hải sản mang đến hương vị đặc sắc khi dùng nguyên liệu chính là gạo Basmati - môt loại gạo Ấn Độ với những công dụng tuyệt vời cho sức khỏe, cộng hưởng vị ngọt tự nhiên của tôm tươi, thanh cua, trứng cua cùng các nguyên liệu và gia vị phong phú. Bên cạnh đó, lớp trứng bao phủ bên ngoài sẽ giúp lưu giữ độ nóng và hương vị món ăn được nguyên vẹn khi đến tay thực khách.',
        ingredient: 'Gạo basmati, Trứng gà, tôm, thanh cua, trứng cá chuồn, bắp hạt, cà rốt, đậu Hà Lan, hành lá, ớt sừng, tỏi, nghệ, mỡ gà, bột gạo, dầu hào. Nước tương pha tỏi, ớt: nước tương, tỏi, ớt sừng',
        timeFinish: '10',
        ration: '1',
        image: monChinhMon3,
        type:'monchinh',
        discount:0,
        slug:'/mon-an/com-chien-hai-san'
    },
    {
        id:10,
        name: 'Cơm sườn nướng',
        price: 65,
        describe: 'Cơm sườn nướng sẽ gây ấn tượng với thực khách ngay từ lần đầu tiên với sự mềm thơm, đầy vị và mọng nước của miếng sườn, không hề khô rang như những nơi khác. Với tổng thời gian tẩm ướp lên đến 8 tiếng, với 4 tiếng ngâm sữa tươi và 4h tiếng ướp gia vị, giúp miếng sườn giữ được độ thơm mềm và hương vị đậm đà tròn trịa. Nước mắm được xem như linh hồn của món được pha chế công phu, khi độ ngọt thanh tự nhiên đến từ nước dừa tươi nấu lên làm thành thứ nước mắm đặc kẹo và là mảnh ghép cuối cùng cho sự tròn trịa hương vị của món tuy quen mà lạ.Món sườn ăn kèm với cơm gạo ST25 hảo hạng, thơm ngon, dẻo bùi, cùng đồ chua được ngâm thủ công tại bếp đảm bảo chất lượng và hương vị độc đáo. ',
        ingredient: 'Sườn cốt lết, gạo ST25, sữa tươi (Ướp sườn), baking soda, dầu hào, nước tương, tiêu đen, bột ngọt, hạt nêm, bột ngũ vị hương, tương ớt, đường cát, mật ong, nước màu gạch tôm, rượu vodka, hành tím, tỏi, hành lá, sả. Nước mắm pha tỏi, ớt: Nước dừa tươi, đường phèn, nước mắm, giấm trắng, tỏi, ớt sừng. Đồ chua: cà rốt ngâm chua, đu đủ ngâm chua, giấm gạo, muối Thái, đường cát. Ăn kèm: Dưa leo, cà chua',
        timeFinish: '12',
        ration: '1',
        image: comMon1,
        type:'com',
        discount:0,
        slug:'/mon-an/com-suon-nuong'
    },
    {
        id:11,
        name: 'Cơm đùi gà chiên giòn',
        price: 58,
        describe: 'Cơm đùi gà chiên giòn vốn là món ăn quen thuộc với nhiều người nhưng với sự tinh tế của các đầu bếp giúp mang đến hương vị mới mẻ, đầy hấp dẫn. Phần đùi gà góc tư được tẩm ướp gia vị trong thời gian vừa đủ sau đó chiên cho lớp da vàng đều và giòn rụm còn phần thịt bên trong đảm bảo mềm dai, vị đậm đà, ngon ngọt tự nhiên. Khi thưởng thức, thực khách dùng kèm cơm nóng dẻo thêm chút cà rốt, đu đủ ngâm chua đặc biệt là phần nước mắm chấm tỏi ớt được pha chế từ nước dừa tươi càng giúp "đổi gió" cho món ăn thân thuộc.',
        ingredient: 'Đùi gà góc 4, muối thái, đường cát, bột thịt gà, hạt nêm heo, bột ngọt, hạt điều, dầu ăn, hành tím, hành lá, gừng củ, gạo tài nguyên, mỡ gà, nghệ củ, trứng gà, ngò gai, nghệ củ. Nước mắm pha tỏi, ớt: Nước dừa tươi, đường phèn, nước mắm, tỏi, ớt sừng. Đồ chua: Cà rốt ngâm chua, đu đủ ngâm chua, giấm gạo, muối Thái, đường cát. Ăn kèm: dưa leo, cà chua, xà lách',
        timeFinish: '12',
        ration: '1',
        image: comMon2,
        type:'com',
        discount:0,
        slug:'/mon-an/com-dui-ga-chien-gion'
    },
    {
        id:12,
        name: 'Cơm chả cua hoàng kim',
        price: 75,
        describe: 'Cơm chả cua hoàng kim với sự đặc biệt khi chả của được làm 100% thủ công. Từ khâu chọn lựa nguyên vật liệu chất lượng, đánh thịt làm giò sóng, sau đó kết hợp với các nguyên liệu như nấm mèo, miến, thịt cua miếng và thịt cua xé nhuyễn. Điểm nhấn đặc biệt nhất là trứng muối béo bùi, tất cả làm nên một hương vị chả cua chỉ có tại TASTY Kitchen. Chả cua được ăn kèm với cơm gạo ST25 hảo hạng, thơm ngon, dẻo bùi, cùng đồ chua được ngâm thủ công tại bếp đảm bảo chất lượng và hương vị độc đáo. Nước mắm được xem như linh hồn của món được pha chế công phu, khi độ ngọt thanh tự nhiên đến từ nước dừa tươi nấu lên làm thành thứ nước mắm đặc kẹo và là mảnh ghép cuối cùng cho sự tròn trịa hương vị của món tuy quen mà lạ.',
        ingredient: 'Mai cua, thịt heo xay, chả cua, thịt cua, trứng gà, trứng vịt muối, gạo ST25, hành tím, bún tàu, nấm mèo, củ sắn, ngò rí, dầu ăn, hành lá, sả, tiêu đen xay, dầu màu điều. Nước mắm pha tỏi, ớt: nước dừa tươi, đường phèn, nước mắm, giấm trắng, tỏi, ớt sừng. Đồ chua: cà rốt ngâm chua, đu đủ ngâm chua, giấm gạo, muối Thái, đường cát. Ăn kèm: dưa leo, cà chua',
        timeFinish: '12',
        ration: '1',
        image: comMon3,
        type:'com',
        discount:0,
        slug:'/mon-an/com-cha-cua-hoang-kim'
    },
    {
        id:13,
        name: 'Salad rau mùa sốt mác mác',
        price: 68,
        describe: 'Salad rau mùa sốt mác mác được lựa chọn từ những loại rau củ ẩm thực phương Tây như xà lách lolo, xà lách carron, dầu oliu, kết hợp với hương đồng cỏ nội trong văn hoá ẩm thực Việt Nam là củ dền, táo đỏ, táo xanh, chanh dây và rau quế. Tất cả được hòa quyện dưới lớp sốt mác mác rau mùi được cấu thành bởi 3 thành phần chính là chanh dây, rau mùi và mayonaise, đem đến hương vị độc đáo, giàu vitamin C và chất xơ.',
        ingredient: 'Táo đỏ, táo xanh, củ dền, cà rốt, xà lách lolo, xà lách carron, chanh dây, dầu oliu, rau quế, mayonaise,...',
        timeFinish: '5',
        ration: '1',
        image: khaiViMon1,
        type:'khaivi',
        discount:0,
        slug:'/mon-an/salad-rau-mua-sot-mac-mac'
    },
    {
        id:14,
        name: 'Phở cuốn',
        price: 82,
        describe: 'Phở cuốn là món ăn được các đầu bếp dành nhiều thời gian dày công chế biến. Với bánh phở tạo ra từ hạt gạo ngâm suốt 12 tiếng liền, sau đó xay và tráng cách thủy mang đến miếng bánh ướt mỏng, dai dai hoàn toàn tự nhiên. Thêm vào đó là sự kết hợp hài hòa cùng nguyên liệu bò Úc thượng hạng tẩm ướp đậm vị và các loại rau thơm nhiệt đới. Khi thưởng thức kèm nước sốt chấm được pha chế đặc biệt mang đến trải nghiệm ẩm thực tuyệt hảo, đầy thú vị.',
        ingredient: 'Nạc vai bò Úc, bánh ướt, húng lủi, húng quế, ngò gai, giá sống, cà chua, hành phi, đậu phộng, nước mắm, đường cát Biên Hòa, giấm nuôi, tỏi lột, mè trắng, bột thịt gà, tiêu đen',
        timeFinish: '5',
        ration: '1',
        image: khaiViMon2,
        type:'khaivi',
        discount:0,
        slug:'/mon-an/pho-cuon'
    },
    {
        id:15,
        name: 'Phiên bản 2 - Gỏi tai heo hoa chuối',
        price: 215,
        describe: 'Sử dụng nguyên liệu chuối tây cùng tai heo quen thuộc, các đầu bếp tạo nên sự khác biệt bằng phương pháp luộc hoa chuối để lọc bỏ hết nhựa, tạo cảm giác dễ chịu và an toàn khi ăn. Kết hợp cùng cà rốt, dưa leo, hành tây, củ kiệu, món gỏi chuối tai heo mang màu sắc bắt mắt và những nét chấm phá đặc biệt trong hương vị. Hoàn thiện tất cả là nước mắm chua ngọt dung hòa, tổng thể làm nên món ăn thơm ngon, giàu chất dinh dưỡng và thanh mát ngày hè.',
        ingredient: 'Ba rọi heo, tai heo, bắp chuối, cà rốt, dưa leo, hành tây, ớt sừng, tỏi, rau răm, ngò rí, húng cây,...',
        timeFinish: '5',
        ration: '1',
        image: khaiViMon3,
        type:'khaivi',
        discount:0,
        slug:'/mon-an/phien-ban-2-goi-tai-heo-hoa-chuoi'
    },
    {
        id:16,
        name: 'Phiên bản 2 - Trà sữa Oolong',
        price: 45,
        describe: 'Trà sữa Oolong là sự hòa quyện của tinh túy giữa trà oolong vùng Bảo Lộc trứ danh và bột sữa thơm béo. Với tỷ lệ trà, sữa và đường phù hợp, mỗi ly trà sữa oolong có vị ngọt thanh dịu nhẹ, dễ dàng làm xiêu lòng mọi tín đồ trà sữa. Chúng tôi hy vọng, mỗi ly trà sữa oloong sẽ giúp quý khách tận hưởng vị ngon lan tỏa đến từng giác quan và tiếp thêm năng lượng cho ngày tươi mới.',
        ingredient: 'Trà oolong Bảo Lộc, bột sữa tách béo ',
        timeFinish: '<3',
        ration: '1',
        image: doUongMon1,
        type:'douong',
        discount:3,
        slug:'/mon-an/phien-ban-2-tra-sua-oolong'
    },
    {
        id:17,
        name: 'Phiên bản 2 - Trà tái nhãn',
        price: 48,
        describe: 'Trà lài luôn là khởi đầu dễ chịu để sáng tạo nên những thức uống thanh nhiệt thú vị. Khi kết hợp cùng long nhãn, trà lài được cân bằng độ chát nhẹ bằng vị ngọt dịu thanh nhã, tạo nên một thức uống giải nhiệt, an thần hiệu quả.',
        ingredient: 'Trà xanh hoa lài Đài Loan, syrup nhãn, trái nhãn',
        timeFinish: '<3',
        ration: '1',
        image: doUongMon2,
        type:'douong',
        discount:0,
        slug:'/mon-an/phien-ban-2-tra-tai-nhan'
    },
    {
        id:18,
        name: 'Phiên bản 2 - Dương chi cam lộ',
        price: 55,
        describe: 'Nước cam ép pha với sữa ngọt thanh tạo cảm giác thoải mái.',
        ingredient: 'Cam Mỹ tho và sữa bà thọ',
        timeFinish: '<3',
        ration: '1',
        image: doUongMon3,
        type:'douong',
        discount:9,
        slug:'/mon-an/phien-ban-2-duong-chi-cam-lo'
    },
    {
        id:19,
        name: 'Phiên bản 2 - Bánh chuối hấp',
        price: 48,
        describe: 'Bánh chuối hấp là một món ăn vặt dân dã của nền ẩm thực Việt. Các đầu bếp của TASTY đã khéo léo kết hợp vị ngọt ngào của những quả chuối sứ chín thơm lừng cùng nước cốt dừa béo ngậy, nhấn nhá một chút hương rượu vodka để gia tăng sự độc đáo trong hương vị từng miếng bánh. Là sự giao thoa tinh tế giữa ẩm thực truyền thống và hơi thở hiện đại, từng miếng bánh chuối dẻo dai được phủ một lớp nước cốt dừa thơm béo, tuy giản dị song lại có sức hấp dẫn lạ lùng với các thực khách gần xa.',
        ingredient: 'Bánh chuối: Chuối sứ chín, đường vàng, muối Thái, hương va-ni, rượu vodka, tinh dầu chuối, bột năng, dầu hạt cải, bột nếp, màu vàng thực phẩm. Nước cốt dừa: nước cốt dừa, sữa đặc, đường cát, bột năng, muối Thái, lá dứa. Trang trí: đậu phộng, mè trắng, lá chuối',
        timeFinish: '6',
        ration: '1 - 2',
        image: trangMiengMon1,
        discount:0,
        slug: '/mon-an/banh-chuoi-hap',
        type:'trangmiphien-ban-2-eng'
    },
    {
        id:20,
        name: 'Phiên bản 2 - Canh mướp hương nhồi thịt',
        price: 20,
        describe: 'Canh mướp hương nhồi thịt được xử lý đầy tinh tế mang đến vị ngọt thanh và hương thơm thoang thoảng kích thích vị giác. Mướp hương vốn là loại quả quen thuộc được nhiều người ưa thích có vị ngọt, tính mát cùng nhiều dưỡng chất tốt cho sức khỏe. Đặc biệt kết hợp với phần nhân làm từ tôm bạc thẻ, thịt heo xay, giò sống heo giúp tăng thêm vị đậm đà, sự dai giòn ấn tượng. Đi cùng vị ngọt thuần chất của các loại củ như su hào, bắp mỹ trái, hành baro, củ sắn...chắc chắn sẽ mang đến trải nghiệm khó quên.',
        ingredient: 'Tôm bạc thẻ, giò sống, cá thát lát, ba chỉ heo xay, mướp hương, ngò rí, hành lá, tỏi củ, hành tím, ớt sừng, bắp mỹ, củ su hào, củ sắn nước, xương gà, đậu hũ non',
        timeFinish: '10',
        ration: '1',
        image: monNuocMon1,
        type:'monnuoc',
        discount:0,
        slug:'/mon-an/phien-ban-2-canh-muop-huong-nhoi-thit'
    },
    {
        id:21,
        name: 'Phiên bản 2 - Bún bò',
        price: 65,
        describe: 'Bún bò món ăn truyền thống, niềm tự hào của ẩm thực vùng đất kinh kỳ nay đã có trong thực đơn với phiên bản đầy mới mẻ đủ khiến mọi thực khách phải xuýt xoa. Để chế biến món bún bò đặc biệt  cần trải qua nhiều công đoạn nhưng quan trọng nhất vẫn là nước lèo - “linh hồn” của món vì cần ninh xương trong hàng giờ liền kết hợp các gia vị và nguyên liệu đặc trưng từ sả tươi, sa tế, ớt sừng, hành tím...đến tôm khô tạo nên màu sắc bắt mắt, dậy mùi thơm phức cùng hương vị đậm đà. Đặc biệt, món ăn còn hấp dẫn bởi phần gầu bò hầm kỹ, chả cua ngọt thịt. Khi thưởng thức, thực khách vắt thêm miếng chanh, thả chút ớt và các loại rau sống tươi ngon chắc chắn sẽ mang đến trải nghiệm khó quên.',
        ingredient: 'Topping: Chả cua, gầu bò, ngò gai, rau răm, hành lá, hành tây. Ăn kèm: Bún tươi, rau muống bào, bắp chuối bào, giá sống, ngò gai, chanh không hạt, ớt Batri, Sa tế khô, rau quế, húng quế. Nước lèo: Xương ống bò, xương bánh chè heo, tôm khô, tỏi, hành tím, hành tây, ớt sừng, sả cây, sa tế, dầu ăn, đường phèn, đường cát, bột ngọt, nước mắm',
        timeFinish: '10',
        ration: '1',
        image: monNuocMon2,
        type:'monnuoc',
        discount:0,
        slug:'/mon-an/phien-ban-2-bun-bo'
    },
    {
        id:22,
        name: 'Phiên bản 2 - Sụn gà xóc muối Tây Ninh',
        price: 35,
        describe: 'Món sụn gà xóc muối Tây Ninh là một món ăn vặt hoàn hảo với độ giòn từ lớp bột bên ngoài và độ dai dai từ sụn gà bên trong. Các đầu bếp đã sáng tạo khéo léo khi kết hợp muối ớt Tây Ninh và các gia vị hấp dẫn giúp tạo nên một món ăn mới lạ với mùi thơm cùng hương vị đậm đà. Món ăn được gói gọn trong một chiếc tổ chim làm bằng sả chiên, không chỉ đẹp mắt mà thực khách có thể thưởng thức độ giòn thơm, vị vừa ăn.',
        ingredient: 'Sụn gà, muối Tây Ninh, trứng gà, sả, nghệ, lá chanh, ớt sừng, hành phi, tỏi phi, tôm khô, chà bông heo, bột chiên xù',
        timeFinish: '10',
        ration: '1',
        image: monChinhMon1,
        type:'monchinh',
        discount:0,
        slug:'/mon-an/phien-ban-2-sun-ga-xoc-muoi-tay-ninh'
    },
    {
        id:23,
        name: 'Phiên bản 2 - Cơm chiên thịt cua lá cẩm',
        price: 89,
        describe: 'Cơm chiên thịt cua lá cẩm là món ăn đạt điểm tuyệt đối từ hình thức đến hương vị. Sử dụng nguyên liệu gạo Basmati Malika giàu dinh dưỡng được nhập khẩu từ Ấn Độ giúp hạt cơm luôn tơi xốp, không bị dính. Kết hợp cùng lá cẩm, một loại thảo dược tốt cho sức khỏe và tạo nên màu tím bắt mắt điểm xuyến với màu trắng từ thịt cua tươi ngon và màu vàng hấp dẫn của bắp mỹ. Món ăn gói cầu kỳ bên trong lớp trứng mỏng giúp lưu giữ độ nóng và vị đậm đà tuyệt hảo.',
        ingredient: 'Gạo Basmati, trứng gà (vỏ trứng cuộn), thịt cua, thanh cua, trứng cá chuồn, giá sống, hành lá, gừng, bắp mỹ, lá cẩm, hạt nêm heo, muối, đường cát, dầu ăn, bột mì, trứng gà, ớt chuông đỏ, ớt sừng xanh, ngò rí. Nước tương pha tỏi, ớt: nước tương Nam Dương, tỏi bằm,ớt sừng bằm',
        timeFinish: '10',
        ration: '1',
        image: monChinhMon2,
        type:'monchinh',
        discount:0,
        slug:'/mon-an/phien-ban-2-com-chien-thit-cua-la-cam'
    },
    {
        id:24,
        name: 'Phiên bản 2 - Cơm chiên hải sản',
        price: 89,
        describe: 'Cơm chiên hải sản mang đến hương vị đặc sắc khi dùng nguyên liệu chính là gạo Basmati - môt loại gạo Ấn Độ với những công dụng tuyệt vời cho sức khỏe, cộng hưởng vị ngọt tự nhiên của tôm tươi, thanh cua, trứng cua cùng các nguyên liệu và gia vị phong phú. Bên cạnh đó, lớp trứng bao phủ bên ngoài sẽ giúp lưu giữ độ nóng và hương vị món ăn được nguyên vẹn khi đến tay thực khách.',
        ingredient: 'Gạo basmati, Trứng gà, tôm, thanh cua, trứng cá chuồn, bắp hạt, cà rốt, đậu Hà Lan, hành lá, ớt sừng, tỏi, nghệ, mỡ gà, bột gạo, dầu hào. Nước tương pha tỏi, ớt: nước tương, tỏi, ớt sừng',
        timeFinish: '10',
        ration: '1',
        image: monChinhMon3,
        type:'monchinh',
        discount:0,
        slug:'/mon-an/phien-ban-2-com-chien-hai-san'
    },
    {
        id:25,
        name: 'Phiên bản 2 - Cơm sườn nướng',
        price: 615,
        describe: 'Cơm sườn nướng sẽ gây ấn tượng với thực khách ngay từ lần đầu tiên với sự mềm thơm, đầy vị và mọng nước của miếng sườn, không hề khô rang như những nơi khác. Với tổng thời gian tẩm ướp lên đến 8 tiếng, với 4 tiếng ngâm sữa tươi và 4h tiếng ướp gia vị, giúp miếng sườn giữ được độ thơm mềm và hương vị đậm đà tròn trịa. Nước mắm được xem như linh hồn của món được pha chế công phu, khi độ ngọt thanh tự nhiên đến từ nước dừa tươi nấu lên làm thành thứ nước mắm đặc kẹo và là mảnh ghép cuối cùng cho sự tròn trịa hương vị của món tuy quen mà lạ.Món sườn ăn kèm với cơm gạo ST25 hảo hạng, thơm ngon, dẻo bùi, cùng đồ chua được ngâm thủ công tại bếp đảm bảo chất lượng và hương vị độc đáo. ',
        ingredient: 'Sườn cốt lết, gạo ST25, sữa tươi (Ướp sườn), baking soda, dầu hào, nước tương, tiêu đen, bột ngọt, hạt nêm, bột ngũ vị hương, tương ớt, đường cát, mật ong, nước màu gạch tôm, rượu vodka, hành tím, tỏi, hành lá, sả. Nước mắm pha tỏi, ớt: Nước dừa tươi, đường phèn, nước mắm, giấm trắng, tỏi, ớt sừng. Đồ chua: cà rốt ngâm chua, đu đủ ngâm chua, giấm gạo, muối Thái, đường cát. Ăn kèm: Dưa leo, cà chua',
        timeFinish: '12',
        ration: '1',
        image: comMon1,
        type:'com',
        discount:0,
        slug:'/mon-an/phien-ban-2-com-suon-nuong'
    },
    {
        id:26,
        name: 'Phiên bản 2 - Cơm đùi gà chiên giòn',
        price: 548,
        describe: 'Cơm đùi gà chiên giòn vốn là món ăn quen thuộc với nhiều người nhưng với sự tinh tế của các đầu bếp giúp mang đến hương vị mới mẻ, đầy hấp dẫn. Phần đùi gà góc tư được tẩm ướp gia vị trong thời gian vừa đủ sau đó chiên cho lớp da vàng đều và giòn rụm còn phần thịt bên trong đảm bảo mềm dai, vị đậm đà, ngon ngọt tự nhiên. Khi thưởng thức, thực khách dùng kèm cơm nóng dẻo thêm chút cà rốt, đu đủ ngâm chua đặc biệt là phần nước mắm chấm tỏi ớt được pha chế từ nước dừa tươi càng giúp "đổi gió" cho món ăn thân thuộc.',
        ingredient: 'Đùi gà góc 4, muối thái, đường cát, bột thịt gà, hạt nêm heo, bột ngọt, hạt điều, dầu ăn, hành tím, hành lá, gừng củ, gạo tài nguyên, mỡ gà, nghệ củ, trứng gà, ngò gai, nghệ củ. Nước mắm pha tỏi, ớt: Nước dừa tươi, đường phèn, nước mắm, tỏi, ớt sừng. Đồ chua: Cà rốt ngâm chua, đu đủ ngâm chua, giấm gạo, muối Thái, đường cát. Ăn kèm: dưa leo, cà chua, xà lách',
        timeFinish: '12',
        ration: '1',
        image: comMon2,
        type:'com',
        discount:0,
        slug:'/mon-an/phien-ban-2-com-dui-ga-chien-gion'
    },
    {
        id:27,
        name: 'Phiên bản 2 - Cơm chả cua hoàng kim',
        price: 753,
        describe: 'Cơm chả cua hoàng kim với sự đặc biệt khi chả của được làm 100% thủ công. Từ khâu chọn lựa nguyên vật liệu chất lượng, đánh thịt làm giò sóng, sau đó kết hợp với các nguyên liệu như nấm mèo, miến, thịt cua miếng và thịt cua xé nhuyễn. Điểm nhấn đặc biệt nhất là trứng muối béo bùi, tất cả làm nên một hương vị chả cua chỉ có tại TASTY Kitchen. Chả cua được ăn kèm với cơm gạo ST25 hảo hạng, thơm ngon, dẻo bùi, cùng đồ chua được ngâm thủ công tại bếp đảm bảo chất lượng và hương vị độc đáo. Nước mắm được xem như linh hồn của món được pha chế công phu, khi độ ngọt thanh tự nhiên đến từ nước dừa tươi nấu lên làm thành thứ nước mắm đặc kẹo và là mảnh ghép cuối cùng cho sự tròn trịa hương vị của món tuy quen mà lạ.',
        ingredient: 'Mai cua, thịt heo xay, chả cua, thịt cua, trứng gà, trứng vịt muối, gạo ST25, hành tím, bún tàu, nấm mèo, củ sắn, ngò rí, dầu ăn, hành lá, sả, tiêu đen xay, dầu màu điều. Nước mắm pha tỏi, ớt: nước dừa tươi, đường phèn, nước mắm, giấm trắng, tỏi, ớt sừng. Đồ chua: cà rốt ngâm chua, đu đủ ngâm chua, giấm gạo, muối Thái, đường cát. Ăn kèm: dưa leo, cà chua',
        timeFinish: '12',
        ration: '1',
        image: comMon3,
        type:'com',
        discount:0,
        slug:'/mon-an/phien-ban-2-com-cha-cua-hoang-kim'
    },
    {
        id:28,
        name: 'Phiên bản 2 - Salad rau mùa sốt mác mác',
        price: 68,
        describe: 'Salad rau mùa sốt mác mác được lựa chọn từ những loại rau củ ẩm thực phương Tây như xà lách lolo, xà lách carron, dầu oliu, kết hợp với hương đồng cỏ nội trong văn hoá ẩm thực Việt Nam là củ dền, táo đỏ, táo xanh, chanh dây và rau quế. Tất cả được hòa quyện dưới lớp sốt mác mác rau mùi được cấu thành bởi 3 thành phần chính là chanh dây, rau mùi và mayonaise, đem đến hương vị độc đáo, giàu vitamin C và chất xơ.',
        ingredient: 'Táo đỏ, táo xanh, củ dền, cà rốt, xà lách lolo, xà lách carron, chanh dây, dầu oliu, rau quế, mayonaise,...',
        timeFinish: '5',
        ration: '1',
        image: khaiViMon1,
        type:'khaivi',
        discount:0,
        slug:'/mon-an/phien-ban-2-salad-rau-mua-sot-mac-mac'
    },
    {
        id:29,
        name: 'Phiên bản 2 - Phở cuốn',
        price: 820,
        describe: 'Phở cuốn là món ăn được các đầu bếp dành nhiều thời gian dày công chế biến. Với bánh phở tạo ra từ hạt gạo ngâm suốt 12 tiếng liền, sau đó xay và tráng cách thủy mang đến miếng bánh ướt mỏng, dai dai hoàn toàn tự nhiên. Thêm vào đó là sự kết hợp hài hòa cùng nguyên liệu bò Úc thượng hạng tẩm ướp đậm vị và các loại rau thơm nhiệt đới. Khi thưởng thức kèm nước sốt chấm được pha chế đặc biệt mang đến trải nghiệm ẩm thực tuyệt hảo, đầy thú vị.',
        ingredient: 'Nạc vai bò Úc, bánh ướt, húng lủi, húng quế, ngò gai, giá sống, cà chua, hành phi, đậu phộng, nước mắm, đường cát Biên Hòa, giấm nuôi, tỏi lột, mè trắng, bột thịt gà, tiêu đen',
        timeFinish: '5',
        ration: '1',
        image: khaiViMon2,
        type:'khaivi',
        discount:0,
        slug:'/mon-an/phien-ban-2-pho-cuon'
    },
    {
        id:30,
        name: 'Phiên bản 2 - Gỏi tai heo hoa chuối',
        price: 250,
        describe: 'Sử dụng nguyên liệu chuối tây cùng tai heo quen thuộc, các đầu bếp tạo nên sự khác biệt bằng phương pháp luộc hoa chuối để lọc bỏ hết nhựa, tạo cảm giác dễ chịu và an toàn khi ăn. Kết hợp cùng cà rốt, dưa leo, hành tây, củ kiệu, món gỏi chuối tai heo mang màu sắc bắt mắt và những nét chấm phá đặc biệt trong hương vị. Hoàn thiện tất cả là nước mắm chua ngọt dung hòa, tổng thể làm nên món ăn thơm ngon, giàu chất dinh dưỡng và thanh mát ngày hè.',
        ingredient: 'Ba rọi heo, tai heo, bắp chuối, cà rốt, dưa leo, hành tây, ớt sừng, tỏi, rau răm, ngò rí, húng cây,...',
        timeFinish: '5',
        ration: '1',
        image: khaiViMon3,
        type:'khaivi',
        discount:0,
        slug:'/mon-an/phien-ban-2-goi-tai-heo-hoa-chuoi'
    },


]


export default foodObject