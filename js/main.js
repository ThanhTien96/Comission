
/**
LANDING PAGE TUYỂN DỤNG

NGƯỜI TẠO: NGUYỄN THANH TIẾN

NGÀY TẠO: 14/09/2022

VERSION: 1.0
 */

function getMyId(id) {
    return document.getElementById(id);
}

document.getElementById('menuOpen').onclick = function () {
    var open = getMyId('menuOpen');
    open.style.display = 'none';
    var close = getMyId('menuClose');
    close.style.display = 'block';
    var menuSub = getMyId('navbarNav');
    menuSub.style.display = 'block';
}

document.getElementById('menuClose').onclick = function () {
    var open = getMyId('menuOpen');
    open.style.display = 'block';
    var close = getMyId('menuClose');
    close.style.display = 'none';
    var menuSub = getMyId('navbarNav');
    menuSub.style.display = 'none'; 
}
// Menu Fixed

$(document).scroll(function () {
    var thisPx = $(document).scrollTop();

    if (thisPx > 50) {
        $('.navbar-light').addClass('menu__fixed');
    }else if (thisPx < 50) {
        $('.navbar-light').removeClass('menu__fixed');
    }
});

// onload

window.onload = function () {
    var loading = document.getElementById('loading');
   
    
   setTimeout(function() {
    loading.style.display = 'none';
   }, 200)
    
}
// owl-carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    margin: 80,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

// OPEN MODAL
getID = (id) => document.getElementById(id);
getModalGD = () => {
    getID('openModal').style.display = 'block';
  
  getID('titleName').innerHTML = "giám đốc kinh doanh";
  var ulNavTop = getID('modalCtTop');
  var ulNavBottom = getID('modalCtBottom');
    ulNavTop.innerHTML = `<li>Quản lý đội ngũ nhân viên kinh doanh của phòng kinh doanh theo sự chỉ đạo trực tiếp của cấp trên;</li>
                        <li>Triển khai kế hoạch kinh doanh đã đề ra;</li>
                        <li>Đào tạo đội ngũ nhân viên kinh doanh;</li>
                        <li>Cập nhât, quản lý thông tin sản phẩm để kịp thời tư vấn, hỗ trợ cho nhân viên;</li>
                        <li>Chịu trách nhiệm tuyển dụng, đào tạo và theo dõi hiệu quả làm việc của đội ngũ nhân viên kinh doanh;</li>
                        <li>Xây dựng và phát triển các mối quan hệ khách hàng;</li>
                        <li>Điều hành, quản lý và chịu trách nhiệm trực tiếp về đội nhóm kinh doanh;</li>
                        <li>Báo cáo về các kết quả kinh doanh.</li>`

    ulNavBottom.innerHTML = `<li> Có kinh nghiệm trong lĩnh vực môi giới bất động sản;</li>
    <li>Có kỹ năng quản lý nhóm tối thiểu từ 3 -5 nhân viên là một lợi thế;</li>
    <li>Kỹ năng lập kế hoạch, điều hành và kiểm soát công việc tốt</li>
    <li>Kỹ năng giao tiếp, đàm phán, giải quyết vấn đề tốt</li>`                   
};
document.getElementById('modalTP1').onclick = () => {
    alert('xin chào') 
    console.log(modalTP1)                  
  };
getID('closeTab').onclick = () => {
    getID('openModal').style.display = 'none';
}

getModalTP = () => {
    getID('openModal').style.display = 'block';
  
  getID('titleName').innerHTML = "trưởng phòng khinh doanh";
  var ulNavTop = getID('modalCtTop');
  var ulNavBottom = getID('modalCtBottom');
    ulNavTop.innerHTML = `<li>Quản lý đội ngũ nhân viên kinh doanh của phòng kinh doanh theo sự chỉ đạo trực tiếp của cấp trên;</li>
                        <li>Triển khai kế hoạch kinh doanh đã đề ra;</li>
                        <li>Đào tạo đội ngũ nhân viên kinh doanh;</li>
                        <li>Cập nhât, quản lý thông tin sản phẩm để kịp thời tư vấn, hỗ trợ cho nhân viên;</li>
                        <li>Chịu trách nhiệm tuyển dụng, đào tạo và theo dõi hiệu quả làm việc của đội ngũ nhân viên kinh doanh;</li>
                        <li>Xây dựng và phát triển các mối quan hệ khách hàng;</li>
                        <li>Điều hành, quản lý và chịu trách nhiệm trực tiếp về đội nhóm kinh doanh;</li>
                        <li>Báo cáo về các kết quả kinh doanh.</li>`

    ulNavBottom.innerHTML = `<li> Có kinh nghiệm trong lĩnh vực môi giới bất động sản;</li>
    <li>Có kỹ năng quản lý nhóm tối thiểu từ 3 -5 nhân viên là một lợi thế;</li>
    <li>Kỹ năng lập kế hoạch, điều hành và kiểm soát công việc tốt</li>
    <li>Kỹ năng giao tiếp, đàm phán, giải quyết vấn đề tốt</li>`                   
};
document.getElementById('modalTP1').onclick = () => {
    alert('xin chào') 
    console.log(modalTP1)                  
  };
getID('closeTab').onclick = () => {
    getID('openModal').style.display = 'none';
}

getModalNV = () => {
    getID('openModal').style.display = 'block';
  
  getID('titleName').innerHTML = "CHUYÊN VIÊN KINH DOANH";
  var ulNavTop = getID('modalCtTop');
  var ulNavBottom = getID('modalCtBottom');
    ulNavTop.innerHTML = `<li>Tìm kiếm và mở rộng nguồn sản phẩm bất động sản tại thành phố Địa điểm làm việc: Bình Phước ;</li>
                        <li>Tìm kiếm, tư vấn khách hàng và bán các sản phẩm bất động sản của công ty;</li>
                        <li>Marketing online & offline để tìm kiếm và xây dựng mối quan hệ khách hàng;</li>
                        <li>Chăm sóc khách hàng hiện tại và khách hàng tiềm năng;</li>
                        <li>Phối kết hợp với đội nhóm để thực hiện chỉ tiêu chung;</li>
                        <li> Tiếp thu, nâng cao kiến thức về sản phẩm và thị trường để tư vấn chốt hợp đồng khách hàng.</li>
                        <li>Nâng cao kỹ năng tư vấn, giới thiệu sản phẩm, hình ảnh công ty đến khách hàng, đối tác một cách chuyên nghiệp.</li>
                        <li>Báo cáo về các kết quả kinh doanh.</li>`

    ulNavBottom.innerHTML = `<li>Giới tính: Nam/Nữ, độ tuổi: 21 - 35 tuổi;</li>
    <li>Đam mê, nhiệt huyết, muốn bứt phá và ham học hỏi;</li>
    <li>Giao tiếp: trình bày rõ ràng để người nghe hiểu được, biết lắng nghe và phản biện đúng lúc;</li>
    <li>Phong cách: Năng động, trẻ trung, trung thực;</li>
    <li>Ngoại hình: thanh lịch;</li>
    <li>Có kinh nghiệm hoặc chứng chỉ hành nghề môi giới bất động sản.</li>`                   
};
document.getElementById('modalTP1').onclick = () => {
    alert('xin chào') 
    console.log(modalTP1)                  
  };
getID('closeTab').onclick = () => {
    getID('openModal').style.display = 'none';
}

getModalCTV = () => {
    getID('openModal').style.display = 'block';
  
  getID('titleName').innerHTML = "CHUYÊN VIÊN KINH DOANH";
  var ulNavTop = getID('modalCtTop');
  var ulNavBottom = getID('modalCtBottom');
    ulNavTop.innerHTML = `<li>Kết nối, giới thiệu chủ nhà, khách hàng tiềm năng với bộ phận Cộng tác viên của công ty;</li>
                        <li>Hợp tác cùng công ty để giao dịch thành công, mang đến lợi ích tốt nhất cho khách hàng và đẩy mạnh thương hiệu công ty.</li>`

    ulNavBottom.innerHTML = `<li>Ưu tiên ứng viên có kinh nghiệm trong lĩnh vực môi giới, đầu tư bất động sản;</li>
    <li>Được công ty hướng dẫn quy trình làm việc để đạt hiệu quả cao nhất trong công việc;</li>
    <li>Có đam mê trong ngành nghề Môi giới Bất động sản, muốn kiếm thêm thu nhập, mở rộng mối quan hệ;</li>
    <li>Không giới hạn độ tuổi, khu vực làm việc, nơi sinh sống;</li>
    <li>Thời gian làm việc tự do;</li>
    <li>Yêu cầu kỹ năng giao tiếp, thuyết phục;</li>
    <li> Tác phong làm việc chuyên nghiệp, khả năng cảm nhận và xử lý tình huống nhanh nhẹn, quyết đoán.</li>`                   
};
document.getElementById('modalTP1').onclick = () => {
    alert('xin chào') 
    console.log(modalTP1)                  
  };
getID('closeTab').onclick = () => {
    getID('openModal').style.display = 'none';
}

// Model Form

showForm = (id) => {
    let innerTag = document.getElementById(id);
    innerTag.style.display = 'inline-block';
}
closeTab = (id) => {
    let tabClose = document.getElementById(id);
    tabClose.style.display = "none";
}















