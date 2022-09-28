import * as bcrypt from 'bcryptjs'

// hasheando senha
export class hashManager{
  static compare(password: any, getPassword: () => string) {
      throw new Error("Method not implemented.");
  }
  public async hash(text:string): Promise<string>{
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(rounds);
    return bcrypt.hash(text, salt);
  }
  public async compare(text: string, hash:string):Promise<boolean>{
         return bcrypt.compare(text, hash)
  }
  

  
 }