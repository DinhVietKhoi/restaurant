import new1 from '../assets/news/new1.webp'
import new2 from '../assets/news/new2.webp'
import new3 from '../assets/news/new3.webp'
import new4 from '../assets/news/new4.webp'
import new5 from '../assets/news/new5.webp'
const news = [
    {
        id:1,
        image: new1,
        user: 'Admin',
        title: 'Mách bạn công thức làm canh cá nấu mẻ thơm ngon đậm vị',
        content: 'Canh cá nấu mẻ là món ăn dân dã, quen thuộc trong mỗi mâm cơm gia đình Việt. Mùa hè nắng nóng mà có bát canh cá chua chua, ngọt ngọt thì còn gì bằng. Có rất nhiều cách để chế biến theo công thức này như: canh cá trắm nấu mẻ, canh cá basa nấu mẻ, canh cá lóc nấu mẻ, canh cá dọc mùng nấu mẻ,…',
        time: '10/02/2023',
        slug:'/tin-tuc/mach-ban-cong-thuc-lam-ca-nau-me-thom-ngon-dam-vi'
        
    },
    {
        id:2,
        image: new2,
        user: 'Admin',
        title: 'Tuyển tập 8 món xào đơn giản, tiết kiệm thời gian cho chị em',
        content: 'Cùng Bếp nhà Dola khám phá công thức làm 8 món xào đơn giản, nhanh gọn trong bài viết dưới đây để làm phong phú, đa dạng thêm cho bữa cơm của gia đình mình nhé.',
        time:'24/10/2022',
        slug:'/tin-tuc/tuyen-tap-8-mon-xao-don-gian-tiet-kiem-thoi-gian-cho-chi-em'
    },
    {
        id:3,
        image: new3,
        user: 'Admin',
        title: 'Hé lộ chìa khóa vàng giúp thiết lập được công thức nấu ăn ngon',
        content: 'Mâm cơm gia đình luôn đóng một vai trò quan trọng trong cuộc sống của chúng ta. Do đó, rất nhiều người luôn dành những khoảng thời gian nhất định trong ngày để chọn mua và chế biến nên những món ăn chất lượng, vừa miệng. Dưới đây là một số công thức nấu ăn ngon làm nên mâm cơm tròn vị. Chị em sẽ không phải đau đầu suy nghĩ “hôm nay ăn gì” và chế biến như thế nào nữa.',
        time:'25/11/2022',
        slug:'/tin-tuc/he-lo-chia-khoa-vang-giup-thiet-lap-duoc-cong-thuc-nau-an-ngon'
    },
    {
        id:4,
        image: new4,
        user: 'Khánh An',
        title: '1001 món ngon mỗi ngày - Giải quyết vấn đề “Hôm nay ăn gì?”',
        content: 'Bữa sáng là một trong những bữa ăn quan trọng trong ngày, giúp cung cấp năng lượng cho một ngày dài học tập và làm việc. Một số món ăn sáng thơm ngon, hấp dẫn nhưng khá đơn giản mà bạn có thể chuẩn bị tại nhà như:',
        time:'05/12/2022',
        slug:'/tin-tuc/1001-mon-ngon-moi-ngay-giai-quyet-van-de-hom-nay-an-gi'
    },
    {
        id:5,
        image: new5,
        user: 'Văn Hội',
        title: 'Cách làm gà ủ muối hoa tiêu thơm ngon đúng vị',
        content: 'Gà ủ muối có nhiều cách làm khác nhau, tùy vào tay mỗi đầu bếp, tuy nhiên, đối với những người lần đầu vào bếp làm món này, chúng ta nên chọn cách làm đơn giản nhất, vừa đảm bảo được hương vị lại vừa tiết kiệm thời gian.',
        time: '02/01/2023',
        slug:'/tin-tuc/cach-lam-ga-u-muoi-hoa-tieu-thom-ngon-dung-vi'
    }
    
]
export default news