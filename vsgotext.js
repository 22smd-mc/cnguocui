
        // 获取页面元素
        const pages = document.querySelectorAll('.page');

        // 初始化当前页码
        let currentPage = 0;

        // 监听滚轮事件
        window.addEventListener('wheel', event => {
            // 判断滚动方向
            if (event.deltaY > 0) {
                // 向下滚动
                if (currentPage < pages.length - 1) {
                    currentPage++;
                    scrollToPage(currentPage);
                }
            } else {
                // 向上滚动
                if (currentPage > 0) {
                    currentPage--;
                    scrollToPage(currentPage);
                }
            }
        });

        // 滚动到指定页面
        function scrollToPage(pageIndex) {
            pages.forEach((page, index) => {
                if (index === pageIndex) {
                    page.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

       // 获取元素节点
        const dropdown = document.querySelector('.dropdown'); // 下拉菜单容器
        const dropdownToggle = document.querySelector('.dropdown-toggle'); // 下拉菜单按钮
        const dropdownItems = document.querySelectorAll('.dropdown-item'); // 下拉菜单选项
        const pages = document.querySelectorAll('.page'); // 所有页面容器

        // 给下拉菜单选项添加事件监听器
        dropdownItems.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault(); // 阻止默认链接跳转行为
                const pageToShow = event.target.getAttribute('data-page'); // 获取被选中的页面的类名
                pages.forEach(page => {
                    page.classList.remove('active'); // 隐藏所有页面
                });
                document.querySelector(`.${pageToShow}`).classList.add('active'); // 显示被选中的页面
                dropdownToggle.textContent = event.target.textContent; // 更新下拉菜单按钮显示的文本
            });
        });

         $(document).ready(function () {
            // 当页面加载时，将第一个页面设置为活动页面
            $('.page:first').addClass('active');

            // 当导航链接被单击时，将相应的页面设置为活动页面
            $('.nav a').click(function (e) {
                e.preventDefault();
                var targetPage = $(this).attr('href');
                $('.page').removeClass('active');
                $(targetPage).addClass('active');
            });
        });

 