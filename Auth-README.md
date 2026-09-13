Install Package
----------------------------------
# JWT authentication / token handling
npm install @nestjs/jwt   

# Authentication integration
npm install @nestjs/passport

# Authentication middleware
npm install passport

# JWT authentication strategy
npm install passport-jwt     

# Password hashing / encryption      
npm install bcrypt                


# Environment configuration
npm install @nestjs/config  

# Request data validation and transformation
npm install class-validator class-transformer   

# Database connection and ORM (MySQL)
npm install @nestjs/typeorm typeorm mysql2    

npm install -D ts-node


Type Dependency need to install
------------------------------------
# TypeScript types for passport-jwt
npm install -D @types/passport-jwt

# TypeScript types for bcrypt
npm install -D @types/bcrypt







npm run migration:create --name=MigrationName     # blank migration
npm run migration:generate --name=CreateUsersTable # diff entities vs DB
npm run migration:run
npm run migration:show
npm run seed