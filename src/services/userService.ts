import { UserCreateInput } from "../generated/prisma/models/User.ts";
import prisma from "../config/prisma.ts";

const createUser = async (data: UserCreateInput) => {
    // 컨트롤러에서 만들어진 newUser를 받아서, prisma를 통해 DB에 저장
    // prisma.테이블.create(객체) : INSERT하는 메서드 => 리턴 값이 생성된 User 객체
    // prisma는 Db와 통신을 하는 ORM이므로, 당연히 비동기 함수 => async - await

    // create를 생성하면 User 객체가 반환되는데, 그걸 바로 return 시킬거면
    // await 키워드를 생략함. 대신 async는 빼면 안됨
    return prisma.user.create({
        data,
    });
};

export default {
    createUser,
};
