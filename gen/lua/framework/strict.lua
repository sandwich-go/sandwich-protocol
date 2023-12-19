local string_len   = string.len
local declareNames = {}
local globalPrefix = ""
local globalPrefixLen = 0
---@param name string 全局变量名
---@param initval any 全局变量初始值
function declareGlobal(name, initval)
   if globalPrefixLen ~=0 and ( string_len(name) <= globalPrefixLen or string.sub(name,1,globalPrefixLen) ~= globalPrefix)  then
      error("GLOBALS are locked, must be declared local or prefix with "..globalPrefix.." for globals." ..name, 2)
   end
   rawset(_G, name, initval)
   declareNames[name] = initval ~= nil
end

---@param name string 移除全局变量，移除后再次访问该全局变量会报错
function unDeclareGlobal(name)
    declareNames[name] = nil
    rawset(_G, name, nil)
end

--- 保护全局变量
---@type fun(key:string)
function protectGlobal(prefix)
   globalPrefix  = prefix or ""
   globalPrefixLen = string.len(globalPrefix)
   setmetatable(_G, {
      __newindex = function (t, k, v)
        if not declareNames[k] then
            error("attempt to write to undeclared var, use declareGlobal. " ..k, 2)
        else
            rawset(t,k, v)
        end
     end,
     __index = function (_, n)
        if not declareNames[n] then
              error("attempt to read undeclared var, declare it first use declareGlobal. "..n, 2)
        else
              return nil
        end
     end
   }
)
end