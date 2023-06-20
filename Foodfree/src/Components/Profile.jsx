function Profile() {
  return (
    <div>
      <div className="profileParent">
        <div>
          <div className="profileMenu">
            <div>
            <button>معلومات الحساب</button>
            <button>المفضلة</button>
            <button>حذف الحساب</button>
            </div>
          </div>
          <div className="profile">

          <form>
            <h1>الملف الشخصي</h1>
            <label>الاسم المستخدم : </label>
            <h2>username</h2>
            <label>كلمة المرور : </label>
            <h2>fffffffffwe13</h2>
            <label>الإيميل الالكتروني :</label>
            <h2>username@gmail.com</h2>
            <div className="selecter">
              هل أنت مصاب بحساسية :<h2>نعم</h2>
            </div>
            <div className="checkboxParent">
              حدد الحساسية المصاب بها :
              <div className="checkbox">
                <h2>جلوتين</h2>
              </div>
            </div>
            <div className="submit_btn">
              <a href="/profileUpdate" className="edit"> تعديل </a>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
