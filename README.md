Что бы использовать все защиты нужно импортировать в модуль который нужно защитить AuthModule
Защита на авторизацию:
@UseGuards(JwtAuth)

Проверка роли пользователя:
@Roles("ADMIN")
@UseGuards(RolesGuard)

Зависимости:
@nestjs/jwt
@nestjs/typeorm
bcrypt
cookie-parser
mysql2
passport-jwt
typeorm


Dev зависимости:
@types/passport-jwt
@types/cookie-parser
@types/bcrypt


npm i @nestjs/jwt @nestjs/typeorm bcrypt cookie-parser mysql2 passport-jwt typeorm
npm i @types/passport-jwt @types/cookie-parser @types/bcrypt